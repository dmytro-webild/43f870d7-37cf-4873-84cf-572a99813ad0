"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Gift, Sparkles, Truck } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="rounded"
        contentWidth="mediumLarge"
        sizing="mediumLargeSizeLargeTitles"
        background="aurora"
        cardStyle="outline"
        primaryButtonStyle="double-inset"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "#hero",
        },
        {
          name: "About Us",
          id: "#about",
        },
        {
          name: "Our Flowers",
          id: "#products",
        },
        {
          name: "Services",
          id: "#features",
        },
        {
          name: "Testimonials",
          id: "#testimonials",
        },
        {
          name: "FAQs",
          id: "#faqs",
        },
        {
          name: "Contact",
          id: "#contact",
        },
      ]}
      logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1678xp"
      logoAlt="Bouquet Flowers VE Logo"
      brandName="Bouquet Flowers VE"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="Experience the Art of Fresh Floral Design"
      description="Handcrafted bouquets and arrangements for every occasion. Bringing beauty and joy to your special moments with every bloom."
      testimonials={[
        {
          name: "Isabella V.",
          handle: "@isabella_events",
          testimonial: "Bouquet Flowers VE made our wedding truly unforgettable with their breathtaking floral designs. Every detail was perfect!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-lovely-woman-with-long-light-brown-hair-big-blue-eyes-smiles-outdoors_291650-335.jpg?_wi=1",
          imageAlt: "Isabella V.",
        },
        {
          name: "David M.",
          handle: "@davidm_gifts",
          testimonial: "Their service is as exquisite as their flowers. My wife loved her birthday bouquet, delivered fresh and on time.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/impressed-girl-admiring-great-music-taste-friend-showing-thumbs-up-smiling-excited-astoni_1258-142264.jpg",
          imageAlt: "David M.",
        },
        {
          name: "Sofia L.",
          handle: "@sofia_home",
          testimonial: "I'm always amazed by the quality and creativity. My weekly subscription brings so much joy to my home.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-beautiful-woman-black-sweater-standing-posing_114579-58749.jpg",
          imageAlt: "Sofia L.",
        },
        {
          name: "Carlos R.",
          handle: "@carlos_corp",
          testimonial: "For corporate events, Bouquet Flowers VE is our go-to. Professional, elegant, and always exceeding expectations.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-senior-man-touching-his-beard-looking-pleased-camera-thinking-hear-interesting-proposal-nod-approval-standing-against-white-background_176420-53178.jpg",
          imageAlt: "Carlos R.",
        },
        {
          name: "Elena P.",
          handle: "@elena_celebrates",
          testimonial: "The custom bouquet for my sister's graduation was beyond beautiful. It perfectly captured the celebratory spirit!",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-woman-uses-phone-writes-message-messenger-checks-email_1321-3892.jpg",
          imageAlt: "Elena P.",
        },
      ]}
      testimonialRotationInterval={6000}
      tag="Blooming Happiness"
      tagAnimation="slide-up"
      buttons={[
        {
          text: "Shop Our Collections",
          href: "#products",
        },
        {
          text: "Request Custom Order",
          href: "#contact",
        },
      ]}
      buttonAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-67039.jpg",
          alt: "Customer 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/well-done-satisfied-businessman-suit-showing-thumbs-up-approval-like-agree-recommend-good_1258-162950.jpg",
          alt: "Customer 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-transgender-wearing-cool-jacket_23-2149105437.jpg",
          alt: "Customer 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/sportive-senior-smiling-camera_23-2148297533.jpg",
          alt: "Customer 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-smiling-young-woman-looking-away_23-2147892778.jpg",
          alt: "Customer 5",
        },
      ]}
      avatarText="Join our community of happy customers!"
      imageSrc="http://img.b2bpic.net/free-photo/selective-focus-flower-bouquet-green-weathered-wooden-background_23-2147940451.jpg?_wi=1"
      imageAlt="Luxurious flower bouquet with soft lighting"
      showDimOverlay={true}
      showBlur={true}
      textPosition="bottom"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",
          content: "Our Passion for Flowers, ",
        },
        {
          type: "image",
          src: "http://img.b2bpic.net/free-photo/front-view-person-preparing-bunch-flowers_23-2148224046.jpg",
          alt: "Florist arranging flowers",
        },
        {
          type: "text",
          content: " Your Perfect Bouquet",
        },
      ]}
      buttons={[
        {
          text: "Our Story",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Daily Fresh Delivery",
          description: "Enjoy prompt and reliable delivery of fresh, exquisite flowers right to your doorstep or your loved one's.",
          icon: Truck,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/lifestyle-person-decorating-their-front-door_23-2150562543.jpg",
              imageAlt: "Flower delivery box",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/crop-florist-putting-flowers-into-box_23-2147760954.jpg",
              imageAlt: "Open flower box",
            },
          ],
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=1678xp",
          imageAlt: "flower delivery box elegant packaging",
        },
        {
          title: "Custom Arrangements",
          description: "Work with our expert florists to create bespoke floral designs tailored to your unique vision and occasion.",
          icon: Sparkles,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/lovely-florist-table-flower-shop_23-2147761006.jpg",
              imageAlt: "Florist sketching design",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/network-connection-graphic-overlay-billboard_53876-120468.jpg",
              imageAlt: "Finished custom bouquet",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/selective-focus-flower-bouquet-green-weathered-wooden-background_23-2147940451.jpg?_wi=2",
          imageAlt: "flower delivery box elegant packaging",
        },
        {
          title: "Event Floral Decor",
          description: "Transform any event into a stunning botanical paradise with our elegant and sophisticated floral decorations.",
          icon: Gift,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/woman-making-beautiful-floral-arrangement_23-2148846517.jpg",
              imageAlt: "Event floral setup",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/look-from-pink-chrysanthemums-hanging-from-black-ceiling_1304-2664.jpg",
              imageAlt: "Luxurious event decor",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-lovely-woman-with-long-light-brown-hair-big-blue-eyes-smiles-outdoors_291650-335.jpg?_wi=2",
          imageAlt: "flower delivery box elegant packaging",
        },
      ]}
      title="Our Floral Services"
      description="Dedicated to delivering fresh, beautiful flowers and exceptional service for every need."
      tag="What We Offer"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Classic Red Rose Bouquet",
          price: "$55.00",
          imageSrc: "http://img.b2bpic.net/free-photo/red-velvet-bouquet-berries-blossoms-flowers-hands-lady-white-blouse_114579-1729.jpg",
          imageAlt: "Classic Red Rose Bouquet",
          rating: 5,
        },
        {
          id: "2",
          name: "Vibrant Mixed Seasonal Bouquet",
          price: "$68.00",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-beautiful-flowers_23-2148140679.jpg",
          imageAlt: "Vibrant Mixed Seasonal Bouquet",
          rating: 4,
        },
        {
          id: "3",
          name: "Elegant White Lily Arrangement",
          price: "$72.00",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-white-poinsettia-composition_23-2149138679.jpg",
          imageAlt: "Elegant White Lily Arrangement",
          rating: 5,
        },
        {
          id: "4",
          name: "Sunny Sunflower Joy",
          price: "$45.00",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-beautiful-sunflowers_23-2147604817.jpg",
          imageAlt: "Sunny Sunflower Joy",
          rating: 4,
        },
        {
          id: "5",
          name: "Tropical Paradise Bouquet",
          price: "$80.00",
          imageSrc: "http://img.b2bpic.net/free-photo/minimal-floral-arrangement-red-surface_58702-17373.jpg",
          imageAlt: "Tropical Paradise Bouquet",
          rating: 5,
        },
        {
          id: "6",
          name: "Chic Succulent Garden",
          price: "$38.00",
          imageSrc: "http://img.b2bpic.net/free-photo/home-room-window-bathroom-white_1203-4678.jpg",
          imageAlt: "Chic Succulent Garden",
          rating: 4,
        },
      ]}
      title="Our Signature Collections"
      description="Discover our exquisite range of fresh flower bouquets and elegant arrangements, perfect for any celebration."
      tag="Shop Flowers"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="The most beautiful flowers I've ever received! Absolutely stunning and lasted so long, making my home feel truly special. Highly recommend Bouquet Flowers VE!"
      rating={5}
      author="Isabella V. - Happy Customer"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/expressive-young-woman-posing_344912-1420.jpg",
          alt: "Isabella V.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-with-bouquet-flowers_1187-3298.jpg",
          alt: "David M.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/image-corporate-woman-working-office-sitting-front-laptop-preparing-business_1258-194628.jpg",
          alt: "Sofia L.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-woman-trendy-stylish-glasses-bright-orange-oversized-jacket-white-background_343596-8172.jpg",
          alt: "Carlos R.",
        },
        {
          src: "http://img.b2bpic.net/free-photo/work-team-digital-art_23-2151492150.jpg",
          alt: "Elena P.",
        },
      ]}
      ratingAnimation="blur-reveal"
      avatarsAnimation="slide-up"
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "Wedding Planners Guild",
        "Grand Event Hall",
        "Luxury Hotels Group",
        "Local Business Alliance",
        "Corporate Celebrations Inc.",
        "Community Festivals Co.",
        "Boutique Catering",
      ]}
      title="Trusted by Happy Customers & Events"
      description="We've had the pleasure of brightening many homes and special events with our floral artistry across various sectors."
    />
  </div>

  <div id="faqs" data-section="faqs">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "How long does flower delivery take?",
          content: "Typically, local deliveries are completed within 4-6 hours. For special requests or same-day delivery, please contact us directly.",
        },
        {
          id: "2",
          title: "Can I customize a bouquet?",
          content: "Absolutely! We offer bespoke floral design services. Please visit our 'Custom Orders' page or contact us to discuss your vision.",
        },
        {
          id: "3",
          title: "What payment methods do you accept?",
          content: "We accept major credit cards (Visa, Mastercard, Amex) and PayPal for online orders. In-store, we also accept cash.",
        },
        {
          id: "4",
          title: "Do you offer international shipping?",
          content: "Currently, we focus on local and national deliveries. For international inquiries, please reach out to our customer service for potential options.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Find answers to common questions about our flower delivery, custom orders, and services."
      tag="Need Help?"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "radial-gradient",
      }}
      tag="Get in Touch"
      title="Let's Create Something Beautiful"
      description="Have a special request or need assistance? Contact our team for personalized floral solutions and exceptional service."
      inputPlaceholder="Enter your email for updates"
      buttonText="Subscribe Now"
      termsText="By clicking Subscribe Now, you're confirming that you agree with our Privacy Policy."
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-vector/elegant-minimalist-luxury-gold-floral-seamless-pattern_44538-11347.jpg"
      imageAlt="Dark floral background"
      logoText="Bouquet Flowers VE"
      columns={[
        {
          title: "Shop",
          items: [
            {
              label: "All Bouquets",
              href: "#products",
            },
            {
              label: "Seasonal Flowers",
              href: "#products",
            },
            {
              label: "Custom Orders",
              href: "#contact",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "Our Story",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "FAQs",
              href: "#faqs",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Contact Us",
              href: "#contact",
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/bouquetflowersve",
            },
            {
              label: "Facebook",
              href: "#",
            },
          ],
        },
      ]}
      copyrightText="© 2024 Bouquet Flowers VE. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
