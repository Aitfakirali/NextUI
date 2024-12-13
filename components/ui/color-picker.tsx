"use client"

import * as React from "react"
import { EyeDropper, Copy } from "lucide-react"
import { HexColorPicker, HexColorInput } from "react-colorful"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export interface ColorPickerProps {
  color?: string
  onColorChange?: (color: string) => void
  className?: string
}

export function ColorPicker({
  color = "#000000",
  onColorChange,
  className,
}: ColorPickerProps) {
  const [selectedColor, setSelectedColor] = React.useState(color)
  const [rgbValues, setRgbValues] = React.useState({ r: 0, g: 0, b: 0 })
  const [hslValues, setHslValues] = React.useState({ h: 0, s: 0, l: 0 })

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null
  }

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0,
      s,
      l = (max + min) / 2

    if (max === min) {
      h = s = 0
    } else {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h /= 6
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100),
    }
  }

  React.useEffect(() => {
    const rgb = hexToRgb(selectedColor)
    if (rgb) {
      setRgbValues(rgb)
      setHslValues(rgbToHsl(rgb.r, rgb.g, rgb.b))
    }
  }, [selectedColor])

  const handleColorChange = (newColor: string) => {
    setSelectedColor(newColor)
    onColorChange?.(newColor)
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(selectedColor)
  }

  const handleEyeDropper = async () => {
    // @ts-ignore
    if (window.EyeDropper) {
      try {
        // @ts-ignore
        const eyeDropper = new EyeDropper()
        const result = await eyeDropper.open()
        handleColorChange(result.sRGBHex)
      } catch (e) {
        console.error("Failed to open eye dropper:", e)
      }
    }
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            className
          )}
        >
          <div
            className="mr-2 h-4 w-4 rounded-full"
            style={{ backgroundColor: selectedColor }}
          />
          {selectedColor}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[280px] p-4">
        <div className="grid gap-4">
          <div className="space-y-2">
            <HexColorPicker
              color={selectedColor}
              onChange={handleColorChange}
              className="w-full"
            />
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 gap-2">
              <div>
                <Label>Hex</Label>
                <HexColorInput
                  color={selectedColor}
                  onChange={handleColorChange}
                  prefixed
                  className="h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button
                variant="outline"
                size="icon"
                className="mt-6"
                onClick={handleEyeDropper}
              >
                <EyeDropper className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="mt-6"
                onClick={handleCopyToClipboard}
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Tabs defaultValue="rgb">
            <TabsList className="w-full">
              <TabsTrigger value="rgb" className="flex-1">RGB</TabsTrigger>
              <TabsTrigger value="hsl" className="flex-1">HSL</TabsTrigger>
            </TabsList>
            <TabsContent value="rgb">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label>R</Label>
                  <Input
                    type="number"
                    min="0"
                    max="255"
                    value={rgbValues.r}
                    readOnly
                  />
                </div>
                <div>
                  <Label>G</Label>
                  <Input
                    type="number"
                    min="0"
                    max="255"
                    value={rgbValues.g}
                    readOnly
                  />
                </div>
                <div>
                  <Label>B</Label>
                  <Input
                    type="number"
                    min="0"
                    max="255"
                    value={rgbValues.b}
                    readOnly
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="hsl">
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <Label>H</Label>
                  <Input
                    type="number"
                    min="0"
                    max="360"
                    value={hslValues.h}
                    readOnly
                  />
                </div>
                <div>
                  <Label>S</Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={hslValues.s}
                    readOnly
                  />
                </div>
                <div>
                  <Label>L</Label>
                  <Input
                    type="number"
                    min="0"
                    max="100"
                    value={hslValues.l}
                    readOnly
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </PopoverContent>
    </Popover>
  )
} 