import Link from "next/link"
import { ArrowUpDown, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProductsPage() {
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
                className="h-5 w-5"
              >
                <circle cx="8" cy="21" r="1" />
                <circle cx="19" cy="21" r="1" />
                <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
              </svg>
              <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                3
              </span>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">All Products</h1>
              <p className="text-muted-foreground">Browse our collection of v0 merchandise</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search products..." className="w-full rounded-md pl-8 sm:w-[300px]" />
              </div>
              <div className="flex gap-2">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="shrink-0">
                      <Filter className="mr-2 h-4 w-4" />
                      Filter
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]" align="end">
                    <DropdownMenuRadioGroup value="all">
                      <DropdownMenuRadioItem value="all">All Categories</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="clothing">Clothing</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="accessories">Accessories</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="office">Office</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="shrink-0">
                      <ArrowUpDown className="mr-2 h-4 w-4" />
                      Sort
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-[200px]" align="end">
                    <DropdownMenuRadioGroup value="featured">
                      <DropdownMenuRadioItem value="featured">Featured</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="newest">Newest</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="price-low">Price: Low to High</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="price-high">Price: High to Low</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-8">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="group">
                <Card className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="object-cover w-full h-full transition-all group-hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-lg">{product.name}</h3>
                      <span className="font-bold">${product.price.toFixed(2)}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{product.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
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

const products = [
  {
    id: "1",
    name: "v0 Logo T-Shirt",
    description: "Classic black t-shirt with the v0 logo",
    price: 29.99,
    category: "clothing",
    image: "/placeholder.svg?key=519hg",
  },
  {
    id: "2",
    name: "v0 Hoodie",
    description: "Comfortable hoodie for coding sessions",
    price: 49.99,
    category: "clothing",
    image: "/placeholder.svg?key=syosl",
  },
  {
    id: "3",
    name: "v0 Developer Mug",
    description: "Your daily coding companion",
    price: 14.99,
    category: "office",
    image: "/placeholder.svg?key=7n6d0",
  },
  {
    id: "4",
    name: "v0 Sticker Pack",
    description: "Decorate your laptop with v0 stickers",
    price: 9.99,
    category: "accessories",
    image: "/placeholder.svg?key=o4jwn",
  },
  {
    id: "5",
    name: "v0 Cap",
    description: "Stylish cap with embroidered v0 logo",
    price: 24.99,
    category: "clothing",
    image: "/placeholder.svg?height=400&width=400&query=black%20cap%20with%20v0%20logo",
  },
  {
    id: "6",
    name: "v0 Notebook",
    description: "Premium notebook for your coding ideas",
    price: 19.99,
    category: "office",
    image: "/placeholder.svg?height=400&width=400&query=notebook%20with%20v0%20logo",
  },
  {
    id: "7",
    name: "v0 Water Bottle",
    description: "Stay hydrated while coding",
    price: 22.99,
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400&query=water%20bottle%20with%20v0%20logo",
  },
  {
    id: "8",
    name: "v0 Laptop Sleeve",
    description: "Protect your laptop in style",
    price: 34.99,
    category: "accessories",
    image: "/placeholder.svg?height=400&width=400&query=laptop%20sleeve%20with%20v0%20logo",
  },
]
