"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface UploadContextValue {
  files: File[]
  addFiles: (files: FileList | File[]) => void
  removeFile: (index: number) => void
  inputRef: React.RefObject<HTMLInputElement>
  triggerFileDialog: () => void
}

const UploadContext = React.createContext<UploadContextValue>({
  files: [],
  addFiles: () => {},
  removeFile: () => {},
  inputRef: { current: null },
  triggerFileDialog: () => {},
})

interface UploadProps {
  accept?: string
  maxSize?: number
  multiple?: boolean
  onFilesSelected?: (files: File[]) => void
  children: React.ReactNode | ((context: UploadContextValue) => React.ReactNode)
}

const Upload = React.forwardRef<HTMLDivElement, UploadProps>(
  ({ accept, maxSize, multiple = true, onFilesSelected, children }, ref) => {
    const [files, setFiles] = React.useState<File[]>([])
    const inputRef = React.useRef<HTMLInputElement>(null)

    const validateFile = (file: File) => {
      if (maxSize && file.size > maxSize) {
        console.error(`File ${file.name} is too large`)
        return false
      }
      if (accept) {
        const acceptedTypes = accept.split(",").map((type) => type.trim())
        const fileType = file.type || ""
        const fileExtension = `.${file.name.split(".").pop()}`
        const isAccepted = acceptedTypes.some((type) => {
          if (type.startsWith(".")) {
            return fileExtension.toLowerCase() === type.toLowerCase()
          }
          if (type.endsWith("/*")) {
            const baseType = type.split("/")[0]
            return fileType.startsWith(`${baseType}/`)
          }
          return fileType === type
        })
        if (!isAccepted) {
          console.error(`File ${file.name} type not accepted`)
          return false
        }
      }
      return true
    }

    const addFiles = (newFiles: FileList | File[]) => {
      const validFiles = Array.from(newFiles).filter(validateFile)
      if (!multiple) {
        setFiles(validFiles.slice(0, 1))
      } else {
        setFiles((prev) => [...prev, ...validFiles])
      }
      if (onFilesSelected) {
        onFilesSelected(validFiles)
      }
    }

    const removeFile = (index: number) => {
      setFiles((prev) => prev.filter((_, i) => i !== index))
    }

    const triggerFileDialog = () => {
      inputRef.current?.click()
    }

    const contextValue: UploadContextValue = {
      files,
      addFiles,
      removeFile,
      inputRef,
      triggerFileDialog,
    }

    return (
      <UploadContext.Provider value={contextValue}>
        <div ref={ref}>
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept={accept}
            multiple={multiple}
            onChange={(e) => {
              if (e.target.files) {
                addFiles(e.target.files)
              }
            }}
          />
          {typeof children === "function" ? children(contextValue) : children}
        </div>
      </UploadContext.Provider>
    )
  }
)
Upload.displayName = "Upload"

interface UploadDropzoneProps extends React.HTMLAttributes<HTMLDivElement> {}

const UploadDropzone = React.forwardRef<HTMLDivElement, UploadDropzoneProps>(
  ({ className, children, ...props }, ref) => {
    const { addFiles, triggerFileDialog } = React.useContext(UploadContext)
    const [isDragging, setIsDragging] = React.useState(false)

    const handleDragOver = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(true)
    }

    const handleDragLeave = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
      e.preventDefault()
      setIsDragging(false)
      if (e.dataTransfer.files) {
        addFiles(e.dataTransfer.files)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative rounded-lg border-2 border-dashed border-muted-foreground/25 transition-colors",
          isDragging && "border-primary",
          className
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={triggerFileDialog}
        {...props}
      >
        {children}
      </div>
    )
  }
)
UploadDropzone.displayName = "UploadDropzone"

interface UploadTriggerProps extends React.HTMLAttributes<HTMLDivElement> {}

const UploadTrigger = React.forwardRef<HTMLDivElement, UploadTriggerProps>(
  ({ className, children, ...props }, ref) => {
    const { triggerFileDialog } = React.useContext(UploadContext)

    return (
      <div
        ref={ref}
        className={cn("cursor-pointer", className)}
        onClick={triggerFileDialog}
        {...props}
      >
        {children}
      </div>
    )
  }
)
UploadTrigger.displayName = "UploadTrigger"

export { Upload, UploadDropzone, UploadTrigger } 