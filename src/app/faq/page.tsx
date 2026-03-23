import { Metadata } from "next";
import { Hero } from "@/components/hero";
import { FAQAccordion } from "@/components/faq-accordion";
import { RelatedGuides } from "@/components/related-guides";
import { ContactCTA } from "@/components/contact-cta";

export const metadata: Metadata = {
  title: "Healthcare in Spain for Expats | FAQ & Complete Guide",
  description: "Everything you need to know about healthcare in Spain as an expat. Public vs private, insurance requirements, EHIC cards, registering with a doctor, and more.",
  keywords: ["healthcare spain expats", "private health insurance spain", "register doctor spain", "EHIC card spain", "spanish healthcare system", "sanitas insurance spain"],
  openGraph: {
    title: "Healthcare in Spain for Expats - Complete FAQ",
    description: "Your questions answered about accessing healthcare in Spain",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Hero
        title="Healthcare in Spain"
        subtitle="FAQ for Expats"
        description="Everything you need to know about accessing quality healthcare in Spain. From public system registration to private insurance options, we've got your questions answered."
        image="/images/healthcare-spain-faq.jpg"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Find answers to the most common questions about healthcare for expats living in or moving to Spain.
            </p>
          </div>

          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Understanding the Spanish Healthcare System
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Public Healthcare (SNS)
              </h3>
              <p className="text-slate-600 mb-4">
                Spain's National Health System (Sistema Nacional de Salud) provides universal healthcare coverage. As a resident, you can access public healthcare either by paying into the social security system or through the convenio especial program.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Free at point of use for eligible residents</li>
                <li>✓ Covers most medical needs including emergencies</li>
                <li>✗ Longer waiting times for non-urgent procedures</li>
                <li>✗ Limited English-speaking doctors in some areas</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Private Healthcare
              </h3>
              <p className="text-slate-600 mb-4">
                Private healthcare offers faster access to specialists, English-speaking doctors, and modern facilities. Most expats in Costa del Sol choose private healthcare for convenience and quality of service.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li>✓ Shorter waiting times</li>
                <li>✓ English-speaking staff</li>
                <li>✓ Modern facilities and equipment</li>
                <li>✗ Requires private insurance or payment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Health Insurance Options
          </h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-teal-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Spanish Private Insurance (Más conocida)
              </h3>
              <p className="text-slate-600 mb-2">
                <strong>Sanitas</strong> and <strong>Adeslas</strong> are the two largest providers with extensive networks across Costa del Sol. Sanitas has the widest network of hospitals and clinics in the region.
              </p>
              <p className="text-sm text-slate-500">
                Typical cost: €50-150/month depending on age and coverage level.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                International Private Insurance
              </h3>
              <p className="text-slate-600 mb-2">
                <strong>Cigna, AXA PPP, Bupa Global</strong> offer international coverage that includes Spain. Good if you travel frequently or want coverage in multiple countries.
              </p>
              <p className="text-sm text-slate-500">
                Typical cost: €100-300/month depending on coverage area and benefits.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-6 py-2">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                UK NHS Coverage (S1 Form)
              </h3>
              <p className="text-slate-600 mb-2">
                UK state pensioners can get an S1 form from the NHS that gives access to Spanish public healthcare. You can also get an EHIC/GHIC for temporary stays.
              </p>
              <p className="text-sm text-slate-500">
                Cost: Free for eligible UK pensioners and those receiving certain benefits.
              </p>
            </div>
          </div>
        </div>
      </section>

      <RelatedGuides guides={relatedGuides} />

      <ContactCTA />
    </main>
  );
}

const faqItems = [
  {
    question: "Do I need private health insurance to live in Spain?",
    answer: `It depends on your residency status. For the initial residency application, most non-EU citizens need private health insurance with no copayments and full coverage in Spain. EU citizens can use their EHIC card temporarily and register for public healthcare once resident.

Once you're a resident paying into social security (through employment or self-employment), you qualify for public healthcare. Many expats choose to keep private insurance anyway for faster access and English-speaking doctors.`,
  },
  {
    question: "How do I register with a doctor (médico de cabecera) in Spain?",
    answer: `To register with a GP (médico de cabecera) in the public system:

1. Get your social security number (número de seguridad social) from the TGSS office
2. Register at your local health center (centro de salud) with your passport, NIE, padron certificate, and social security documentation
3. You'll be assigned a GP based on your address
4. Request a health card (tarjeta sanitaria)

For private healthcare, simply contact your chosen clinic with your insurance details and they'll register you directly.`,
  },
  {
    question: "What's the difference between Sanitas and Adeslas?",
    answer: `Both are major Spanish health insurers with wide networks on the Costa del Sol:

**Sanitas:**
- Largest network of hospitals and clinics in Spain
- Often preferred by expats for English-speaking customer service
- Slightly more expensive premiums
- Excellent coverage in Costa del Sol

**Adeslas:**
- Very competitive pricing
- Good coverage, especially in urban areas
- Slightly smaller network than Sanitas
- Often bundled with other insurance products

Both work with major private hospitals in Costa del Sol including Hospital Costa del Sol Marbella, HC Marbella, and Quirónsalud Málaga.`,
  },
  {
    question: "Can I use my UK NHS coverage in Spain?",
    answer: `UK citizens have several options:

**For temporary stays (holidays):**
- Use a GHIC (Global Health Insurance Card) for emergency and necessary healthcare
- Note: GHIC doesn't cover private treatment or medical repatriation

**For UK pensioners retiring to Spain:**
- Apply for an S1 form before moving
- Register the S1 with the INSS in Spain to access public healthcare
- This covers you and any dependent family members

**For working-age adults:**
- Generally need private insurance for residency applications
- Can access public healthcare once working and paying social security

Always check current post-Brexit guidance on gov.uk as rules may change.`,
  },
  {
    question: "How much does private healthcare cost in Spain?",
    answer: `**Insurance Premiums (monthly):**
- Basic coverage (under 50): €40-80/month
- Comprehensive coverage (under 50): €80-150/month
- Over 60 years: €150-250+/month
- International coverage: €100-300/month

**Typical Treatment Costs (without insurance):**
- GP consultation: €50-80
- Specialist consultation: €80-150
- Dental checkup: €30-50
- Dental implant: €800-1,500
- MRI scan: €300-600
- Blood tests: €50-150
- Emergency room visit: €200-500

Many expats find Spanish private healthcare 30-50% cheaper than equivalent UK private care.`,
  },
  {
    question: "Are there English-speaking doctors in Costa del Sol?",
    answer: `Yes, absolutely. The Costa del Sol has a large international community, and many healthcare providers specifically cater to English-speaking patients:

**Marbella/Puerto Banús:**
- Hospital Costa del Sol: Many English-speaking doctors
- HC Marbella: International hospital with multilingual staff

**Málaga:**
- Quirónsalud Málaga: International patient services
- Most private clinics have English-speaking staff

**Estepona & Fuengirola:**
- Many clinics specifically advertise English services
- Large British/Irish communities mean demand is high

When booking appointments, always specify if you need an English-speaking doctor. Private clinics are more likely to accommodate this than public health centers.`,
  },
  {
    question: "What does the convenio especial program offer?",
    answer: `The convenio especial is a special pay-in program that allows people who don't qualify for free public healthcare to access the Spanish public system by paying a monthly fee.

**Key details:**
- Cost: Around €60/month for under 65s, €157/month for over 65s
- Covers all public healthcare services (doctor visits, hospital treatment, prescriptions at reduced cost)
- No pre-existing condition exclusions
- Available to residents who aren't covered by other means

**To apply:**
- Visit your local INSS (Social Security) office
- Provide passport, NIE, padron certificate, and proof you don't have other coverage
- Pay the first month's fee to activate

This is a popular option for early retirees who don't qualify for an S1 form and want public healthcare access without high private insurance premiums.`,
  },
  {
    question: "How do emergency services work in Spain?",
    answer: `**Emergency Numbers:**
- General emergency: 112 (works across EU)
- Ambulance: 061

**Public Emergency Rooms (Urgencias):**
- Available 24/7 at all public hospitals
- Free at point of use for those covered by public healthcare
- Expect waits of 2-6 hours for non-critical cases

**Private Emergency Services:**
- Most private hospitals have 24/7 urgent care
- Faster service but requires insurance or payment
- Typical cost: €200-500 without insurance

**Important notes:**
- For life-threatening emergencies, go to the nearest public hospital (Urgencias)
- Private hospitals may transfer serious cases to public facilities
- Always carry your health card or insurance documentation
- Many areas have English-speaking staff at private emergency rooms`,
  },
  {
    question: "Can I get prescriptions filled with UK or foreign prescriptions?",
    answer: `**UK Prescriptions in Spain:**
- EU-issued prescriptions can generally be filled in Spain
- UK prescriptions post-Brexit may not be automatically accepted
- Some pharmacies will honor them at their discretion
- Best to get a Spanish prescription from a local doctor

**Getting Spanish Prescriptions:**
- Public system: Your GP prescribes, collected at any pharmacy (farmacia)
- Private: Specialist or GP prescribes, take to pharmacy
- Many common medications don't require prescriptions in Spain

**Pharmacy Notes:**
- Farmacias are widely available and pharmacists can often advise on minor ailments
- Prescription costs are much lower than UK (often €5-15 per item)
- Look for the green cross sign for pharmacies`,
  },
  {
    question: "What about dental care in Spain?",
    answer: `**Public Dental Coverage:**
- Very limited - generally only for emergencies and specific groups (children, pregnant women)
- Most dental care must be paid privately or through dental insurance

**Private Dental Care:**
- Excellent quality and much cheaper than UK
- Typical costs:
  - Checkup: €30-50
  - Filling: €60-120
  - Crown: €400-800
  - Implant: €800-1,500
  - Root canal: €200-400

**Dental Insurance:**
- Many health insurance plans include basic dental
- Standalone dental insurance: €10-30/month
- Sanitas and Adeslas both offer popular dental plans

**Dental Tourism:**
- Costa del Sol is popular for dental tourism
- Many clinics offer packages for international patients
- Often 40-60% cheaper than UK prices with excellent quality`,
  },
];

const relatedGuides = [
  {
    title: "Moving to Spain Checklist",
    description: "Complete guide to relocating to Costa del Sol",
    slug: "moving-to-spain-checklist",
  },
  {
    title: "NIE Application Guide",
    description: "How to get your Spanish residency number",
    slug: "nie-application-guide",
  },
  {
    title: "Property Buying Guide",
    description: "Everything about buying property in Costa del Sol",
    slug: "property-buying-guide",
  },
  {
    title: "Cost of Living in Costa del Sol",
    description: "Budget planning for expats",
    slug: "cost-of-living-costa-del-sol",
  },
];
