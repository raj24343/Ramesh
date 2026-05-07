"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type LanguageCode = "en" | "te" | "hi" | "ta" | "fr";

type LanguageContextValue = {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  t: (key: string) => string;
};

const translations: Record<LanguageCode, Record<string, string>> = {
  en: {
    "lang.label": "Language",
    "nav.about": "About",
    "nav.product": "Product",
    "nav.solutions": "Solutions",
    "nav.trust": "Trust",
    "nav.contact": "Contact",
    "theme.light": "Light",
    "theme.dark": "Dark",
    "header.bookDemo": "Book Demo",
    "hero.pill": "Founder & CEO | SaaS Innovator",
    "hero.title": "Building the Future of Campus Management",
    "hero.copy":
      "I help colleges scale smarter with Campus360, an all-in-one digital campus operating system built for modern institutions, ambitious administrators, and outcome-focused leadership teams.",
    "hero.bookDemo": "Book a Demo",
    "hero.exploreProduct": "Explore Product",
    "stats.1": "Colleges Onboarded",
    "stats.2": "Students Managed",
    "stats.3": "Satisfaction Score",
    "stats.4": "Founder Experience",
    "footer.about": "About",
    "footer.product": "Product",
    "footer.contact": "Contact",
    "footer.linkedin": "LinkedIn",
    "about.kicker": "About The Founder",
    "about.title": "Visionary Entrepreneur Driving Educational Transformation",
    "about.body1":
      "I am a founder, operator, and product strategist focused on solving real institutional bottlenecks with technology. After years in SaaS and digital transformation, I launched Campus360 to eliminate disconnected systems and empower colleges with one intelligent platform.",
    "about.body2": "Mission: make world-class education operations accessible, automated, and insight-driven for every campus.",
    "about.journeyKicker": "Founder Journey",
    "about.journeyTitle": "From idea to institutional impact",
    "about.milestone.1.title": "Idea & Validation",
    "about.milestone.1.text": "Interviewed 100+ educators and identified operational bottlenecks.",
    "about.milestone.2.title": "MVP Launch",
    "about.milestone.2.text": "Launched Campus360 with early adopter colleges and strong retention.",
    "about.milestone.3.title": "Scale Phase",
    "about.milestone.3.text": "Expanded product suite with AI modules and analytics intelligence.",
    "about.milestone.4.title": "Market Leadership",
    "about.milestone.4.text": "Became a trusted digital transformation partner for higher education.",
    "product.kicker": "Core Product",
    "product.title": "Campus360 - All-in-One Campus Management System",
    "product.copy":
      "Campus360 unifies student lifecycle operations, finance workflows, placement readiness, and decision intelligence into one premium SaaS platform.",
    "product.feature.1": "Student Management",
    "product.feature.2": "Attendance Automation",
    "product.feature.3": "Smart Fees & Payments",
    "product.feature.4": "AI Mock Interviews",
    "product.feature.5": "Analytics Dashboard",
    "product.feature.copy": "Purpose-built workflows designed to cut operational friction and increase institutional efficiency.",
    "product.mockup.1": "Admissions & Student Hub",
    "product.mockup.2": "Finance and Attendance Control",
    "product.mockup.3": "AI Interview and Outcomes Analytics",
    "product.requestDemo": "Request Demo",
    "product.getStarted": "Get Started",
    "solutions.problemKicker": "The Problem",
    "solutions.problemTitle": "Colleges lose growth due to disconnected operations",
    "solutions.solutionKicker": "The Solution",
    "solutions.solutionTitle": "Campus360 centralizes every critical workflow",
    "solutions.problem.point.1": "Manual attendance and fee operations",
    "solutions.problem.point.2": "Fragmented student records and reporting delays",
    "solutions.problem.point.3": "No predictive insights for leadership decisions",
    "solutions.solution.point.1": "Unified data across departments in real time",
    "solutions.solution.point.2": "Automation for repetitive admin-heavy tasks",
    "solutions.solution.point.3": "Actionable dashboards for strategic planning",
    "solutions.servicesKicker": "Services & Capabilities",
    "solutions.servicesTitle": "Beyond software: strategic growth partnership",
    "solutions.service.1": "SaaS Product",
    "solutions.service.2": "Consulting",
    "solutions.service.3": "AI Solutions",
    "solutions.service.4": "Digital Transformation",
    "solutions.service.copy": "High-impact execution aligned to institutional goals, stakeholders, and measurable outcomes.",
    "trust.socialKicker": "Social Proof",
    "trust.socialTitle": "Trusted by ambitious educational institutions",
    "trust.testimonialsKicker": "Testimonials",
    "trust.testimonialsTitle": "What principals and admin leaders say",
    "trust.mediaKicker": "Media & Presence",
    "trust.mediaTitle": "Featured in founder talks and edtech events",
    "trust.mediaCopy":
      "Invited speaker on digital campuses, AI in education, and operational excellence across leadership summits and startup forums.",
    "trust.testimonial.1.quote":
      "Campus360 completely modernized our operations. We saved over 15 hours per week in admin work within the first month.",
    "trust.testimonial.1.role": "Principal, Nova Institute of Technology",
    "trust.testimonial.2.quote":
      "The implementation was seamless and the founder personally ensured adoption. It's rare to get this level of strategic partnership.",
    "trust.testimonial.2.role": "Director, Crestline Group of Colleges",
    "trust.testimonial.3.quote":
      "From admissions to analytics, our leadership team now has complete visibility. Campus360 has been a growth multiplier.",
    "trust.testimonial.3.role": "Admin Head, Greenfield Business School",
    "contact.kicker": "Let's Build Your Campus Transformation Story",
    "contact.title": "Book a free strategy demo",
    "contact.copy": "Share your current challenges, and my team will design a custom implementation roadmap for your institution.",
    "contact.whatsapp": "WhatsApp Chat",
    "form.name": "Your Name",
    "form.company": "College / Company",
    "form.phone": "Phone Number",
    "form.message": "Tell us your challenges",
    "form.submitting": "Submitting...",
    "form.submit": "Book a Free Demo",
    "form.success": "Thanks! Our team will contact you shortly.",
  },
  te: {
    "lang.label": "భాష",
    "nav.about": "గురించి",
    "nav.product": "ఉత్పత్తి",
    "nav.solutions": "పరిష్కారాలు",
    "nav.trust": "నమ్మకం",
    "nav.contact": "సంప్రదించండి",
    "theme.light": "లైట్",
    "theme.dark": "డార్క్",
    "header.bookDemo": "డెమో బుక్ చేయండి",
    "hero.pill": "వ్యవస్థాపకుడు & CEO | SaaS ఆవిష్కర్త",
    "hero.title": "క్యాంపస్ మేనేజ్‌మెంట్ భవిష్యత్తును నిర్మిస్తున్నాం",
    "hero.copy":
      "Campus360 సహాయంతో కళాశాలలు వేగంగా ఎదగడానికి నేను సహాయపడుతున్నాను. ఇది ఆధునిక సంస్థల కోసం రూపొందించిన ఆల్-ఇన్-వన్ డిజిటల్ క్యాంపస్ ఆపరేటింగ్ సిస్టమ్.",
    "hero.bookDemo": "డెమో బుక్ చేయండి",
    "hero.exploreProduct": "ఉత్పత్తిని చూడండి",
    "stats.1": "చేరిన కాలేజీలు",
    "stats.2": "నిర్వహించిన విద్యార్థులు",
    "stats.3": "సంతృప్తి స్కోర్",
    "stats.4": "సంస్థాపక అనుభవం",
    "footer.about": "గురించి",
    "footer.product": "ఉత్పత్తి",
    "footer.contact": "సంప్రదించండి",
    "footer.linkedin": "లింక్డ్‌ఇన్",
    "product.requestDemo": "డెమో అభ్యర్థించండి",
    "product.getStarted": "ప్రారంభించండి",
    "product.feature.copy": "ఆపరేషన్లలో అడ్డంకులను తగ్గించేందుకు రూపొందించిన సమర్థమైన వర్క్‌ఫ్లోలు.",
    "contact.title": "ఉచిత వ్యూహాత్మక డెమో బుక్ చేయండి",
    "contact.whatsapp": "వాట్సాప్ చాట్",
    "trust.testimonial.1.role": "ప్రిన్సిపల్, నోవా ఇన్స్టిట్యూట్ ఆఫ్ టెక్నాలజీ",
    "trust.testimonial.2.role": "డైరెక్టర్, క్రెస్ట్‌లైన్ గ్రూప్ ఆఫ్ కాలేజెస్",
    "trust.testimonial.3.role": "అడ్మిన్ హెడ్, గ్రీన్‌ఫీల్డ్ బిజినెస్ స్కూల్",
    "solutions.service.copy": "సంస్థ లక్ష్యాలకు అనుగుణంగా కొలిచే ప్రభావంతో అమలు.",
    "form.submit": "ఉచిత డెమో బుక్ చేయండి",
    "form.submitting": "సబ్మిట్ అవుతోంది...",
    "form.success": "ధన్యవాదాలు! మా బృందం త్వరలో మిమ్మల్ని సంప్రదిస్తుంది.",
  },
  hi: {
    "lang.label": "भाषा",
    "nav.about": "परिचय",
    "nav.product": "प्रोडक्ट",
    "nav.solutions": "समाधान",
    "nav.trust": "विश्वास",
    "nav.contact": "संपर्क",
    "theme.light": "लाइट",
    "theme.dark": "डार्क",
    "header.bookDemo": "डेमो बुक करें",
    "hero.pill": "संस्थापक और CEO | SaaS इनोवेटर",
    "hero.title": "कैंपस मैनेजमेंट का भविष्य बना रहे हैं",
    "hero.copy":
      "मैं Campus360 के साथ कॉलेजों को बेहतर तरीके से स्केल करने में मदद करता हूं, जो आधुनिक संस्थानों और परिणाम-केंद्रित नेतृत्व टीमों के लिए बनाया गया ऑल-इन-वन डिजिटल प्लेटफॉर्म है।",
    "hero.bookDemo": "डेमो बुक करें",
    "hero.exploreProduct": "प्रोडक्ट देखें",
    "stats.1": "ऑनबोर्ड हुए कॉलेज",
    "stats.2": "प्रबंधित छात्र",
    "stats.3": "संतुष्टि स्कोर",
    "stats.4": "संस्थापक अनुभव",
    "footer.about": "परिचय",
    "footer.product": "प्रोडक्ट",
    "footer.contact": "संपर्क",
    "footer.linkedin": "लिंक्डइन",
    "product.requestDemo": "डेमो अनुरोध करें",
    "product.getStarted": "शुरू करें",
    "product.feature.copy": "ऑपरेशनल बाधाएं कम करने के लिए डिजाइन किए गए प्रभावी वर्कफ्लो।",
    "contact.title": "फ्री स्ट्रेटजी डेमो बुक करें",
    "contact.whatsapp": "व्हाट्सऐप चैट",
    "trust.testimonial.1.role": "प्रिंसिपल, नोवा इंस्टिट्यूट ऑफ टेक्नोलॉजी",
    "trust.testimonial.2.role": "डायरेक्टर, क्रेस्टलाइन ग्रुप ऑफ कॉलेजेस",
    "trust.testimonial.3.role": "एडमिन हेड, ग्रीनफील्ड बिजनेस स्कूल",
    "solutions.service.copy": "संस्थागत लक्ष्यों और मापनीय परिणामों के अनुरूप प्रभावशाली निष्पादन।",
    "form.submit": "फ्री डेमो बुक करें",
    "form.submitting": "सबमिट हो रहा है...",
    "form.success": "धन्यवाद! हमारी टीम आपसे जल्द संपर्क करेगी।",
  },
  ta: {
    "lang.label": "மொழி",
    "nav.about": "அறிமுகம்",
    "nav.product": "தயாரிப்பு",
    "nav.solutions": "தீர்வுகள்",
    "nav.trust": "நம்பிக்கை",
    "nav.contact": "தொடர்பு",
    "theme.light": "ஒளி",
    "theme.dark": "இருள்",
    "header.bookDemo": "டெமோ பதிவு செய்யவும்",
    "hero.pill": "Founder & CEO | SaaS புதுமையாளர்",
    "hero.title": "கேம்பஸ் மேலாண்மையின் எதிர்காலத்தை உருவாக்குகிறோம்",
    "hero.copy":
      "Campus360 மூலம் கல்லூரிகள் மேலும் புத்திசாலித்தனமாக வளர நான் உதவுகிறேன். இது நவீன கல்வி நிறுவனங்களுக்கு உருவாக்கப்பட்ட முழுமையான டிஜிட்டல் தளம்.",
    "hero.bookDemo": "டெமோ பதிவு செய்யவும்",
    "hero.exploreProduct": "தயாரிப்பை பார்க்கவும்",
    "stats.1": "இணைந்த கல்லூரிகள்",
    "stats.2": "நிர்வகிக்கப்பட்ட மாணவர்கள்",
    "stats.3": "திருப்தி மதிப்பெண்",
    "stats.4": "Founder அனுபவம்",
    "footer.about": "அறிமுகம்",
    "footer.product": "தயாரிப்பு",
    "footer.contact": "தொடர்பு",
    "footer.linkedin": "லிங்க்ட்இன்",
    "product.requestDemo": "டெமோ கோரிக்கை",
    "product.getStarted": "தொடங்கவும்",
    "product.feature.copy": "செயல்பாட்டு சிக்கல்களை குறைக்க உருவாக்கப்பட்ட திறமையான பணிச்சூழல்கள்.",
    "contact.title": "இலவச திட்டமிடல் டெமோ பதிவு செய்யவும்",
    "contact.whatsapp": "வாட்ஸ்அப் உரையாடல்",
    "trust.testimonial.1.role": "முதல்வர், நோவா இன்ஸ்டிட்யூட் ஆஃப் டெக்னாலஜி",
    "trust.testimonial.2.role": "இயக்குனர், கிரெஸ்ட்லைன் கல்லூரிகள் குழு",
    "trust.testimonial.3.role": "அட்மின் தலைவர், கிரீன்ஃபீல்ட் பிஸினஸ் பள்ளி",
    "solutions.service.copy": "நிறுவன இலக்குகள் மற்றும் அளவிடக்கூடிய முடிவுகளுடன் ஒத்திசைந்த செயல்பாடு.",
    "form.submit": "இலவச டெமோ பதிவு செய்யவும்",
    "form.submitting": "சமர்ப்பிக்கப்படுகிறது...",
    "form.success": "நன்றி! எங்கள் குழு விரைவில் தொடர்பு கொள்கிறது.",
  },
  fr: {
    "lang.label": "Langue",
    "nav.about": "A propos",
    "nav.product": "Produit",
    "nav.solutions": "Solutions",
    "nav.trust": "Confiance",
    "nav.contact": "Contact",
    "theme.light": "Clair",
    "theme.dark": "Sombre",
    "header.bookDemo": "Reserver une demo",
    "hero.pill": "Fondateur & CEO | Innovateur SaaS",
    "hero.title": "Construire l'avenir de la gestion des campus",
    "hero.copy":
      "J'aide les colleges a se developper plus intelligemment avec Campus360, une plateforme numerique tout-en-un pour les etablissements modernes et les equipes de direction orientees resultats.",
    "hero.bookDemo": "Reserver une demo",
    "hero.exploreProduct": "Voir le produit",
    "stats.1": "Colleges integres",
    "stats.2": "Etudiants geres",
    "stats.3": "Score de satisfaction",
    "stats.4": "Experience du fondateur",
    "footer.about": "A propos",
    "footer.product": "Produit",
    "footer.contact": "Contact",
    "footer.linkedin": "LinkedIn",
    "product.requestDemo": "Demander une demo",
    "product.getStarted": "Commencer",
    "product.feature.copy": "Des workflows concus pour reduire les frictions operationnelles et gagner en efficacite.",
    "contact.title": "Reserver une demo strategique gratuite",
    "contact.whatsapp": "Chat WhatsApp",
    "trust.testimonial.1.role": "Directrice, Nova Institute of Technology",
    "trust.testimonial.2.role": "Directeur, Crestline Group of Colleges",
    "trust.testimonial.3.role": "Responsable admin, Greenfield Business School",
    "solutions.service.copy": "Execution a fort impact alignee avec les objectifs institutionnels et les resultats mesurables.",
    "form.submit": "Reserver une demo gratuite",
    "form.submitting": "Envoi en cours...",
    "form.success": "Merci ! Notre equipe vous contactera rapidement.",
  },
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem("site-language") as LanguageCode | null;
    return saved && translations[saved] ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("site-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (key: string) => translations[language][key] ?? translations.en[key] ?? key,
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
