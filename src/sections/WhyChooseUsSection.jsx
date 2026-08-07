import {
    BadgeCheck,
    Leaf,
    Clock3,
    ShieldCheck,
} from "lucide-react";

import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.webp"

const reasons = [
    {
        icon: BadgeCheck,
        title: "Experienced Pest Control Specialists",
        description:
            "Reliable treatment backed by hands-on experience in handling termites and other common household pests.",
    },
    {
        icon: Leaf,
        title: "Safe & Effective Treatment",
        description:
            "We use practical pest control methods designed to protect your property while keeping treatment areas properly managed.",
    },
    {
        icon: Clock3,
        title: "Fast & Responsive Service",
        description:
            "We respond quickly to pest concerns and help arrange treatment based on your property's condition and availability.",
    },
    {
        icon: ShieldCheck,
        title: "Focused on Long-Term Protection",
        description:
            "Our goal is not only to treat active pests but also to help reduce the risk of recurring infestations.",
    },
];

export default function WhyChooseUsSection() {
    return (
        <section id="why-us" className="px-6 py-20 lg:px-10">
            <div className="mx-auto max-w-7xl">
                <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

                    {/* Image */}
                    <div className="overflow-hidden rounded-lg border border-slate-200">
                        <img
                            src={p2}
                            alt="Professional pest control service"
                            className="h-full min-h-[420px] w-full object-cover"
                        />


                        <div className="flex items-center gap-5 bg-slate-50 p-5">
                            <img
                                src={p3}
                                alt="Food and Drug Administration Philippines"
                                className="h-14 w-auto object-contain"
                            />

                            <div>
                                <p className="font-semibold text-slate-900">
                                    Committed to Safe & Compliant Pest Control
                                </p>
                                <p className="mt-1 text-sm leading-6 text-slate-600">
                                    We use pest control products and treatment practices that follow
                                    applicable safety and regulatory standards.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-yellow-600">
                            Why Choose Us
                        </span>

                        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 lg:text-4xl">
                            Reliable Protection for Your Home & Property
                        </h2>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 lg:text-base secondary-font">
                            We provide dependable pest control solutions focused on proper
                            treatment, responsive service, and long-term protection for homes
                            and properties.
                        </p>

                        {/* Reasons */}
                        <div className="mt-9 space-y-2">
                            {reasons.map((reason) => {
                                const Icon = reason.icon;

                                return (
                                    <article
                                        key={reason.title}
                                        className="group flex gap-4 rounded-lg border border-slate-200 bg-white p-5 transition-colors duration-300 hover:bg-yellow-50">

                                        <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-yellow-100 text-yellow-700">
                                            <Icon className="size-5" />
                                        </div>

                                        <div>
                                            <h3 className="font-semibold tracking-tight text-slate-900">
                                                {reason.title}
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-600 secondary-font">
                                                {reason.description}
                                            </p>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}