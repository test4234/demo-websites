import products from "../../data/products";
import ProductCard from "../../components/ProductCard";
import siteConfig from "../../data/siteConfig";
import {
  Package,
  AlertCircle,
  Phone,
  MessageCircle,
  ShoppingBag,
  Clock,
} from "lucide-react";

export const metadata = {
  title: `Pharmacy Products | ${siteConfig.companyName}`,
  description: `Browse available medicines, medical equipment, and healthcare products from ${siteConfig.companyName} Pharmacy in ${siteConfig.defaultCity}. Prescription medicines available with valid doctor's prescription.`,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-secondary">
      {/* ================= HEADER ================= */}
      <header className="relative py-10 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-6">
            <Package className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-text-muted">
              Hospital Pharmacy
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-text-primary tracking-tight mb-6">
            Pharmacy{" "}
            <span className="text-accent font-bold">Products</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-text-muted max-w-3xl mx-auto leading-relaxed">
            Explore medicines, healthcare equipment, and wellness products
            available at{" "}
            <span className="font-semibold text-text-primary">
              {siteConfig.companyName}
            </span>
            . Prescription medicines require valid doctor approval.
          </p>
        </div>
      </header>

      {/* ================= IMPORTANT NOTICE ================= */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-card border border-border rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              {/* Left */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  <AlertCircle className="w-7 h-7 text-accent" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-1">
                    Prescription Safety Notice
                  </h3>
                  <p className="text-text-muted">
                    Prescription medicines require a valid doctor’s prescription.
                  </p>
                </div>
              </div>

              {/* Right Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-semibold hover:opacity-90 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  Consult Doctor
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-card text-text-primary font-semibold hover:bg-secondary transition"
                >
                  <Phone className="w-4 h-4 text-accent" />
                  Pharmacy Query
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS GRID ================= */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Title */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card mb-5">
              <ShoppingBag className="w-4 h-4 text-accent" />
              <span className="text-sm font-semibold text-text-muted">
                All Pharmacy Products
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-3">
              Browse Products
            </h2>

            <p className="text-text-muted max-w-xl mx-auto">
              Select any product to view details or order directly via WhatsApp.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= ORDER INFO ================= */}
      <section className="py-20 border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-card border border-border rounded-3xl p-10 lg:p-14 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
              {/* Left Steps */}
              <div>
                <h2 className="text-3xl font-extrabold text-text-primary mb-10">
                  How to Order Products
                </h2>

                <div className="space-y-7">
                  {[
                    {
                      step: "1",
                      title: "Browse Products",
                      desc: "Choose medicines or healthcare items from our catalog.",
                    },
                    {
                      step: "2",
                      title: "Prescription Check",
                      desc: "Ensure you have a valid prescription for Rx medicines.",
                    },
                    {
                      step: "3",
                      title: "Order via WhatsApp",
                      desc: "Click Buy Now and confirm your order with our team.",
                    },
                    {
                      step: "4",
                      title: "Pickup or Delivery",
                      desc: "Free delivery within Machilipatnam or pickup at hospital.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center font-bold text-accent">
                        {item.step}
                      </div>

                      <div>
                        <h4 className="text-lg font-bold text-text-primary">
                          {item.title}
                        </h4>
                        <p className="text-text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right WhatsApp Card */}
              <div className="rounded-2xl border border-border bg-secondary p-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-5">
                    <MessageCircle className="w-9 h-9 text-accent" />
                  </div>

                  <h3 className="text-2xl font-extrabold text-text-primary mb-2">
                    Quick WhatsApp Ordering
                  </h3>

                  <p className="text-text-muted">
                    Fastest way to order pharmacy products.
                  </p>
                </div>

                {/* Info Points */}
                <div className="space-y-3">
                  {[
                    "Share prescription images easily",
                    "24/7 WhatsApp support",
                    "Same-day delivery available*",
                  ].map((text, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card"
                    >
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-medium text-text-primary">
                        {text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <div className="mt-8">
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp?.replace(
                      /\D/g,
                      ""
                    )}?text=Hello%20${siteConfig.companyName}%20Pharmacy,%20I%20would%20like%20to%20order%20medicines`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent text-accent-foreground font-bold hover:opacity-90 transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start WhatsApp Order
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Small Footer Note */}
          <p className="text-xs text-text-muted mt-6 text-center">
            *Delivery depends on stock availability and prescription validation.
          </p>
        </div>
      </section>
    </div>
  );
}
