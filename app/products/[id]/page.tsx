"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1)
  const [size, setSize] = useState("m")

  // In a real app, we would fetch the product data based on the ID
  // For this demo, we'll use a mock product
  const product = {
    id: params.id,
    name: "v0 Logo T-Shirt",
    description:
      "Show your love for AI-powered development with our premium v0 logo t-shirt. Made from 100% organic cotton for maximum comfort during those long coding sessions.",
    price: 29.99,
    sizes: ["xs", "s", "m", "l", "xl", "xxl"],
    images: [
      "/placeholder.svg?height=600&width=600&query=black%20tshirt%20with%20v0%20logo%20front",
      "/placeholder.svg?height=600&width=600&query=black%20tshirt%20with%20v0%20logo%20back",
      "/placeholder.svg?height=600&width=600&query=black%20tshirt%20with%20v0%20logo%20detail",
    ],
    features: [
      "100% organic cotton",
      "Comfortable fit",
      "Machine washable",
      "Available in multiple sizes",
      "Exclusive v0 design",
    ],
    category: "clothing",
  }

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">v0</span> Merch Shop
          </Link>
          <nav className="flex items-center gap-6">
            <Link href="/products" className="text-sm font-medium hover:underline">
              Products
            </Link>
            <Link href="/about" className="text-sm font-medium hover:underline">
              About
            </Link>
            <Link href="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild className="gap-1">
              <Link href="/products">
                <ChevronLeft className="h-4 w-4" />
                Back to Products
              </Link>
            </Button>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg border">
                <img
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-lg border cursor-pointer">
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${product.name} view ${index + 1}`}
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <p className="text-2xl font-bold mt-2">${product.price.toFixed(2)}</p>
              </div>

              <p className="text-muted-foreground">{product.description}</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Size</h3>
                  <RadioGroup value={size} onValueChange={setSize} className="flex flex-wrap gap-2">
                    {product.sizes.map((sizeOption) => (
                      <div key={sizeOption} className="flex items-center space-x-2">
                        <RadioGroupItem value={sizeOption} id={`size-${sizeOption}`} className="peer sr-only" />
                        <Label
                          htmlFor={`size-${sizeOption}`}
                          className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-input bg-background peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary"
                        >
                          {sizeOption.toUpperCase()}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Quantity</h3>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon" onClick={decrementQuantity} disabled={quantity <= 1}>
                      <Minus className="h-4 w-4" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={incrementQuantity}>
                      <Plus className="h-4 w-4" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Add to Cart
                </Button>
              </div>

              <Tabs defaultValue="details">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="details">Details</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                <TabsContent value="details" className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold">Product Details</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Our v0 Logo T-Shirt is the perfect way to show your support for AI-powered development. Made from
                      premium materials, this shirt is designed for comfort and durability.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Material</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      100% organic cotton, pre-shrunk to ensure a consistent size wash after wash.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Care Instructions</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Machine wash cold with similar colors. Tumble dry low. Do not iron decoration.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-3 w-3"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="space-y-4 mt-4">
                  <div>
                    <h3 className="font-semibold">Shipping Information</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      We ship worldwide. Standard shipping takes 3-5 business days within the US and 7-14 business days
                      internationally.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Returns</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      We offer a 30-day return policy. Items must be unworn and in original condition with tags
                      attached.
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 v0 Merch Shop. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
