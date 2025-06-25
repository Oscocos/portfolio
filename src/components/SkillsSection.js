export default function SkillsSection({ skills }) {
    return (
        <section className="relative bg-[#000000]/40 border border-[#0AFFED] rounded-md p-6 shadow-md max-w-3xl mx-auto text-[#BADEFC] font-masiva">
            {skills.map((category, index) => (
                <div key={index} className="mb-6">
                    <h3 className="text-lg font-semibold text-[#0AFFED] mb-2">
                        {category.category}
                    </h3>
                    <div className="space-y-2">
                        {category.items.map(([skill, level], idx) => (
                            <div key={idx} className="flex items-center">
                                <span className="w-40 text-sm font-semibold text-[#EEF0F2]">
                                    {skill}
                                </span>
                                <div className="flex-1 h-2 bg-[#1e293b] rounded overflow-hidden">
                                    <div
                                        className="h-full bg-[#0AFFED]"
                                        style={{ width: `${level * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}