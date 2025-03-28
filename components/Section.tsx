interface SectionProps {
    title: string
  }
  
  export default function Section({ title }: SectionProps) {
    return (
      <section className="max-w-4xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="text-gray-400">[Content Placeholder]</p>
      </section>
    )
  }
  