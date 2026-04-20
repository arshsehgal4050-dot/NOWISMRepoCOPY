import nowismLogo from "@/assets/nowism-logo.png";
import { ArrowDown, Calendar, Clock, Mail, MapPin, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Index = () => {
  const [intention, setIntention] = useState("");

  const handleExitEscapism = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!intention.trim()) {
      e.preventDefault();
      return;
    }
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-lg tracking-[0.3em] text-primary uppercase font-semibold">Nowism</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#offerings" className="hover:text-foreground transition-colors">Offerings</a>
            <a href="#events" className="hover:text-foreground transition-colors">Events</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Connect</a>
          </div>
          <a href="#offerings">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs tracking-widest uppercase font-bold">
              ENTER
            </Button>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
          <img
            src={nowismLogo}
            alt="NOWISM logo"
            className="w-48 h-48 md:w-64 md:h-64 object-contain mb-12 rounded-full"
          />
          <h1 className="text-5xl md:text-7xl tracking-[0.2em] text-foreground mb-6 uppercase font-semibold font-sans mx-0">
            Nowism
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl mb-4 font-extralight">
            The art of total presence.
          </p>
          <p className="text-sm text-muted-foreground/70 font-light tracking-wide mb-12">
            Events · Courses · Transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
            <Input
              type="text"
              value={intention}
              onChange={(e) => setIntention(e.target.value)}
              placeholder="What are you here to do?"
              className="bg-card/50 border-primary/30 text-foreground placeholder:text-muted-foreground/60 text-sm tracking-wide focus-visible:ring-primary/50"
            />
            <Button
              onClick={handleExitEscapism}
              disabled={!intention.trim()}
              variant="outline"
              className="tracking-[0.2em] text-xs border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              EXIT ESCAPISM
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="tracking-[0.3em] text-primary uppercase mb-4 text-sm font-bold">HOW TO</p>
              <h2 className="text-3xl md:text-4xl mb-8 leading-tight font-semibold">
                ENTER<br />
                <span className="text-primary">NOWISM</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 font-semibold">
                Nowism is not a destination; it’s a frequency. You tune into it by silencing the echoes. Close the door on the future, let the past dissolve, and let the present moment finally become enough.
              </p>
              <p className="text-muted-foreground leading-relaxed font-semibold">
                At the heart of NOWISM are intimate one-on-one journeys. Alongside immersive events and courses, we guide you beyond survival and into the steady power of the present moment.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-border flex items-center justify-center">
                <div className="aspect-square w-3/4 rounded-full border border-primary/20 flex items-center justify-center">
                  <div className="aspect-square w-3/4 rounded-full border border-primary/40 flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-border" />

      {/* Offerings */}
      <section id="offerings" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="tracking-[0.3em] text-primary uppercase mb-4 text-center text-base font-semibold">Offerings</p>
          <h2 className="text-3xl md:text-4xl text-center mb-16 font-normal">
            Paths To Presence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <User className="w-5 h-5" />,
                title: "Solo Immersions",
                desc: "Private guidance tailored to your journey — direct support to move from survival into presence.",
              },
              {
                icon: <Clock className="w-5 h-5" />,
                title: "Online Courses (Soon)",
                desc: "Self-paced programs that weave presence practices into your daily life, wherever you are.",
              },
              {
                icon: <Calendar className="w-5 h-5" />,
                title: "Live Events (Soon)",
                desc: "Workshops and gatherings that create breakthroughs through shared energy and guided practice.",
              },
              {
                icon: <Sparkles className="w-5 h-5" />,
                title: "Immersive Retreats (Soon)",
                desc: "Multi-day experiences designed to dissolve the noise and reconnect you with the present moment.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-500"
              >
                <div className="text-primary mb-6">{item.icon}</div>
                <h3 className="text-lg font-light mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-6 bg-card border-y border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-extralight leading-relaxed text-foreground/80 italic">
            "The present moment is the only moment available to us, and it is the door to all moments."
          </p>
          <p className="tracking-[0.3em] text-primary uppercase mt-8 font-semibold text-base">- Thich Nhat Hanh</p>
        </div>
      </section>

      {/* Events */}
      <section id="events" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="tracking-[0.3em] text-primary uppercase mb-4 text-center text-base font-semibold">COMING SOON</p>
          <h2 className="text-3xl md:text-4xl font-extralight text-center mb-16">
            Events & Experiences
          </h2>
          <div className="space-y-4">
            {[
              { date: "N/A", title: "Summer Solstice Gathering", location: "N/A", type: "Retreat" },
              { date: "N/A", title: "The Art of Stillness", location: "N/A", type: "COURSE" },
              { date: "N/A", title: "Urban Presence Workshop", location: "N/A", type: "Workshop" },
              { date: "N/A", title: "Silence & Surrender Retreat", location: "N/A", type: "Retreat" },
            ].map((event, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-8 p-6 border border-border rounded-lg hover:border-primary/30 transition-all duration-500 cursor-pointer"
              >
                <span className="text-sm text-primary tracking-wider font-light w-20 shrink-0">{event.date}</span>
                <span className="text-lg font-light flex-1 group-hover:text-primary transition-colors">{event.title}</span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="w-3 h-3" /> {event.location}
                </span>
                <span className="text-xs tracking-widest uppercase text-muted-foreground border border-border rounded-full px-3 py-1 w-fit">
                  {event.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
        <div className="max-w-2xl mx-auto text-center relative z-10">
          <p className="tracking-[0.3em] text-primary uppercase mb-4 text-base font-semibold">Your invitation</p>
          <h2 className="text-3xl md:text-4xl mb-6 font-semibold">
            The moment is NOW.
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed text-xl font-normal whitespace-pre-line">
            Step out of autopilot. Step into life.
            It starts with one decision: be here now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 tracking-widest uppercase text-xs px-8 py-6">
              Explore Courses
            </Button>
            <Button variant="outline" className="border-border text-foreground hover:bg-card tracking-widest uppercase text-xs px-8 py-6">
              View Events
            </Button>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-32 px-6 border-t border-border">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.3em] text-primary uppercase mb-4">Connect</p>
          <h2 className="text-3xl font-extralight mb-8">Stay present with us</h2>
          <p className="text-muted-foreground font-light mb-10">
            Subscribe for mindful updates on upcoming events, courses, and reflections.
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-card border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6">
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-sm tracking-[0.3em] text-primary uppercase font-semibold">Nowism</span>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Nowism. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
