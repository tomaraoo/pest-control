import {
    Copyright,
    Mail,
    MapPin,
    Phone,
    ShieldCheckIcon,
    Clock3,
} from "lucide-react";

export default function FooterSection() {
    return (
        <footer className="bg-[#1E1701] text-[#f4f4f4]">
            <div className="mx-auto max-w-7xl px-6 py-12 lg:px-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-yellow-400">
                            <ShieldCheckIcon className="size-6" />
                            <span className="text-lg font-bold">
                                Milpestcon - Anay Pest Control
                            </span>
                        </div>

                        <p className="secondary-font max-w-md text-sm leading-6 text-gray-300">
                            Your trusted local specialists in professional pest inspection, treatment, and prevention. Protecting homes and properties from pests since 2020.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="mb-4 text-sm font-bold tracking-wider text-yellow-400">
                            CONTACT US
                        </p>

                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-center gap-3">
                                <Mail className="size-4 text-yellow-400" />
                                <span>sample@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone className="size-4 text-yellow-400" />
                                <span>+63 912 345 6789</span>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <p className="mb-4 text-sm font-bold tracking-wider text-yellow-400">
                            HOURS & AREA
                        </p>

                        <div className="space-y-3 text-sm text-gray-300">
                            <div className="flex items-start gap-3">
                                <Clock3 className="mt-0.5 size-4 shrink-0 text-yellow-400" />
                                <span>Monday to Saturday: 7:00 AM – 7:00 PM</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <MapPin className="mt-0.5 size-4 shrink-0 text-yellow-400" />
                                <span>Serving Bulacan and nearby areas</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 border-t border-white/10 pt-6">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
                        <Copyright className="size-3.5" />
                        <span>2020 Milpestcon - Anay Pest Control. All rights reserved.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}