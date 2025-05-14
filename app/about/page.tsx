import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About v0 Merch</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  The story behind our AI-powered merchandise shop.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground">
                  At v0 Merch, we're passionate about bringing the excitement of AI-powered development to your everyday
                  life. Our mission is to create high-quality merchandise that celebrates the innovation and creativity
                  of the v0 community.
                </p>
                <p className="text-muted-foreground">
                  We believe that great technology deserves great merchandise. That's why we've created a collection of
                  products that are not only stylish and comfortable but also represent the cutting-edge technology that
                  v0 stands for.
                </p>
              </div>
              <img
                src="/placeholder.svg?height=400&width=600&query=team%20working%20on%20merchandise%20designs"
                alt="Our team working on merchandise designs"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <img
                src="/placeholder.svg?height=400&width=600&query=sustainable%20clothing%20production"
                alt="Sustainable clothing production"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center lg:order-last"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Sustainability</h2>
                <p className="text-muted-foreground">
                  We're committed to sustainable and ethical production practices. All of our products are made from
                  high-quality, eco-friendly materials, and we work with suppliers who share our values.
                </p>
                <p className="text-muted-foreground">
                  From organic cotton t-shirts to recycled packaging, we're constantly looking for ways to reduce our
                  environmental footprint while delivering exceptional products to our customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Our Team</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Meet the passionate individuals behind v0 Merch who bring creativity and innovation to every product.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-12">
              {teamMembers.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="overflow-hidden rounded-full">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="aspect-square h-40 w-40 object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  <p className="mt-2 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Join the v0 Community</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground">
                  Be the first to know about new products, exclusive offers, and community events.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </div>
        </section>
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

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & Creative Director",
    bio: "Alex brings over a decade of experience in design and e-commerce to v0 Merch.",
    image: "/placeholder.svg?height=200&width=200&query=professional%20headshot%20of%20creative%20director",
  },
  {
    name: "Sam Rivera",
    role: "Product Designer",
    bio: "Sam is passionate about creating merchandise that combines style with functionality.",
    image: "/placeholder.svg?height=200&width=200&query=professional%20headshot%20of%20product%20designer",
  },
  {
    name: "Taylor Kim",
    role: "Customer Experience",
    bio: "Taylor ensures that every customer has an amazing experience with v0 Merch.",
    image: "/placeholder.svg?height=200&width=200&query=professional%20headshot%20of%20customer%20service%20specialist",
  },
]
