import { CONTACT } from "@/utils/assets";
import { useState } from "react";

const SERVICES = [
  "Bridal Makeup",
  "SFX / Prosthetic Makeup",
  "Airbrush Makeup",
  "Celebrity HD Makeup",
  "Editorial Makeup",
  "Face Painting",
  "Film / Movie Makeup",
  "Pre-Wedding Shoot Makeup",
];

const FLOATING_ORBS = [
  { top: "8%", left: "4%", size: 320, color: "rgba(196,149,106,0.08)" },
  { top: "55%", right: "3%", size: 260, color: "rgba(139,94,60,0.06)" },
  { bottom: "10%", left: "35%", size: 200, color: "rgba(232,201,154,0.07)" },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  message: string;
};

const EMPTY: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  message: "",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 18px",
  background: "rgba(255,248,240,0.06)",
  border: "1px solid rgba(196,149,106,0.28)",
  borderRadius: 12,
  color: "#FFF8F0",
  fontSize: 15,
  fontFamily: "var(--font-body)",
  outline: "none",
  transition: "border-color 0.25s ease, box-shadow 0.25s ease",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#C4956A",
  marginBottom: 8,
};

export default function AppointmentSection() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (field: keyof FormState, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(EMPTY);
    setTimeout(() => setSubmitted(false), 6000);
  };

  const getFocusStyle = (field: string): React.CSSProperties =>
    focused === field
      ? {
          ...inputStyle,
          borderColor: "#C4956A",
          boxShadow:
            "0 0 0 3px rgba(196,149,106,0.18), 0 4px 20px rgba(196,149,106,0.12)",
          background: "rgba(255,248,240,0.1)",
        }
      : inputStyle;

  return (
    <section
      id="appointment"
      data-ocid="appointment.section"
      style={{
        background:
          "linear-gradient(160deg, #1A0F09 0%, #2A1F17 50%, #3D2B1F 100%)",
        padding: "110px 0 120px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating gradient orbs */}
      {FLOATING_ORBS.map((orb, orbIdx) => (
        <div
          key={orb.color}
          style={{
            position: "absolute",
            ...({
              top: orb.top,
              left: orb.left,
              right: orb.right,
              bottom: orb.bottom,
            } as React.CSSProperties),
            width: orb.size,
            height: orb.size,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
            filter: "blur(50px)",
            pointerEvents: "none",
            animation: `floatOrb${orbIdx} ${6 + orbIdx * 2}s ease-in-out infinite alternate`,
          }}
        />
      ))}

      {/* Decorative floating particles */}
      {Array.from({ length: 12 }, (_, i) => i).map((i) => (
        <div
          key={`particle-${i}`}
          style={{
            position: "absolute",
            width: i % 3 === 0 ? 4 : 2,
            height: i % 3 === 0 ? 4 : 2,
            borderRadius: "50%",
            background: `rgba(196,149,106,${0.2 + (i % 4) * 0.1})`,
            top: `${10 + i * 7}%`,
            left: `${5 + ((i * 17) % 90)}%`,
            animation: `particleDrift ${4 + i * 0.5}s ease-in-out infinite alternate`,
            pointerEvents: "none",
          }}
        />
      ))}

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "10px 28px",
              background: "rgba(196,149,106,0.1)",
              border: "1px solid rgba(196,149,106,0.3)",
              borderRadius: 50,
              marginBottom: 24,
              backdropFilter: "blur(8px)",
            }}
          >
            <span style={{ fontSize: 16 }}>💄</span>
            <span
              style={{
                color: "#C4956A",
                fontWeight: 800,
                fontSize: 12,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
              }}
            >
              Schedule Your Session
            </span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 58px)",
              fontWeight: 700,
              color: "#FFF8F0",
              lineHeight: 1.1,
              marginBottom: 16,
              textShadow: "0 0 40px rgba(196,149,106,0.3)",
            }}
          >
            Book Your Appointment
          </h2>

          {/* Golden underline */}
          <div
            style={{
              width: 100,
              height: 3,
              background:
                "linear-gradient(90deg, transparent, #C4956A, #E8C99A, #C4956A, transparent)",
              borderRadius: 4,
              margin: "0 auto 20px",
              boxShadow: "0 0 12px rgba(196,149,106,0.5)",
            }}
          />

          <p
            style={{
              fontSize: 17,
              color: "#C4956A",
              letterSpacing: "0.04em",
              fontStyle: "italic",
              fontFamily: "var(--font-display)",
            }}
          >
            ✦ Your dream look is just one step away ✦
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left info panel */}
          <div>
            <div
              style={{
                background: "rgba(255,248,240,0.04)",
                border: "1px solid rgba(196,149,106,0.2)",
                borderRadius: 24,
                padding: "36px 32px",
                backdropFilter: "blur(12px)",
                marginBottom: 24,
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#E8C99A",
                  marginBottom: 24,
                }}
              >
                Why Book With Us?
              </h3>
              {[
                {
                  icon: "✨",
                  text: "Personalised consultation before every session",
                },
                {
                  icon: "🎨",
                  text: "Premium products — Airbrush, HD, and SFX grade",
                },
                {
                  icon: "⏱️",
                  text: "Punctual and professional — no delays on your big day",
                },
                {
                  icon: "📸",
                  text: "Looks crafted for camera, HD, and natural lighting",
                },
                {
                  icon: "🏆",
                  text: "Bombay School certified — industry-grade expertise",
                },
                {
                  icon: "💛",
                  text: "100% satisfaction guarantee with 500+ happy clients",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    marginBottom: 16,
                    fontSize: 14,
                    color: "#C4956A",
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0, marginTop: 1 }}>
                    {item.icon}
                  </span>
                  <span style={{ color: "#D4B896" }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Contact details */}
            <div
              style={{
                background:
                  "linear-gradient(135deg, rgba(196,149,106,0.15), rgba(139,94,60,0.1))",
                border: "1px solid rgba(196,149,106,0.3)",
                borderRadius: 20,
                padding: "24px 28px",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#C4956A",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: 18,
                }}
              >
                Studio Details
              </div>
              {[
                { icon: "📱", label: "Call / WhatsApp", value: "09610659366" },
                {
                  icon: "📍",
                  label: "Location",
                  value: "Jaloria Bas, Nagori Gate, Jodhpur, Rajasthan",
                },
                {
                  icon: "🕐",
                  label: "Hours",
                  value: "Mon–Sun · 8:00 AM – 8:00 PM",
                },
              ].map((info) => (
                <div
                  key={info.label}
                  style={{ display: "flex", gap: 12, marginBottom: 14 }}
                >
                  <span style={{ fontSize: 18, flexShrink: 0 }}>
                    {info.icon}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: 11,
                        color: "#9A7B5C",
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: 2,
                      }}
                    >
                      {info.label}
                    </div>
                    <div
                      style={{
                        fontSize: 14,
                        color: "#E8C99A",
                        fontWeight: 500,
                      }}
                    >
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking form */}
          <div>
            {/* Success state */}
            {submitted && (
              <div
                data-ocid="appointment.success_state"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(196,149,106,0.2), rgba(232,201,154,0.1))",
                  border: "1px solid rgba(196,149,106,0.5)",
                  borderRadius: 20,
                  padding: "28px 32px",
                  textAlign: "center",
                  marginBottom: 24,
                  backdropFilter: "blur(12px)",
                  boxShadow:
                    "0 8px 40px rgba(196,149,106,0.2), 0 0 60px rgba(196,149,106,0.1)",
                  animation:
                    "successPop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                <div style={{ fontSize: 48, marginBottom: 12 }}>✨</div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#E8C99A",
                    marginBottom: 10,
                  }}
                >
                  Booking Request Sent!
                </div>
                <div
                  style={{ fontSize: 15, color: "#C4956A", lineHeight: 1.6 }}
                >
                  Thank you! Shila will contact you within 24 hours to confirm
                  your appointment.
                </div>
              </div>
            )}

            <form
              data-ocid="appointment.form"
              onSubmit={handleSubmit}
              style={{
                background: "rgba(255,248,240,0.04)",
                border: "1px solid rgba(196,149,106,0.25)",
                borderRadius: 24,
                padding: "36px 32px",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 8px 60px rgba(0,0,0,0.3), 0 0 40px rgba(196,149,106,0.08), inset 0 1px 0 rgba(255,248,240,0.06)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Form shimmer top accent */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 2,
                  background:
                    "linear-gradient(90deg, transparent, #C4956A, #E8C99A, #C4956A, transparent)",
                  boxShadow: "0 0 12px rgba(196,149,106,0.6)",
                }}
              />

              <div style={{ display: "grid", gap: 20 }}>
                {/* Name + Phone row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                >
                  <div>
                    <label htmlFor="appt-name" style={labelStyle}>
                      Full Name
                    </label>
                    <input
                      id="appt-name"
                      type="text"
                      required
                      placeholder="Priya Sharma"
                      value={form.name}
                      data-ocid="appointment.name_input"
                      onChange={(e) => handleChange("name", e.target.value)}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused("")}
                      style={getFocusStyle("name")}
                    />
                  </div>
                  <div>
                    <label htmlFor="appt-phone" style={labelStyle}>
                      Phone Number
                    </label>
                    <input
                      id="appt-phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      data-ocid="appointment.phone_input"
                      onChange={(e) => handleChange("phone", e.target.value)}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused("")}
                      style={getFocusStyle("phone")}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="appt-email" style={labelStyle}>
                    Email Address
                  </label>
                  <input
                    id="appt-email"
                    type="email"
                    placeholder="priya@example.com"
                    value={form.email}
                    data-ocid="appointment.email_input"
                    onChange={(e) => handleChange("email", e.target.value)}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    style={getFocusStyle("email")}
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="appt-service" style={labelStyle}>
                    Service Required
                  </label>
                  <select
                    id="appt-service"
                    required
                    value={form.service}
                    data-ocid="appointment.service_select"
                    onChange={(e) => handleChange("service", e.target.value)}
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused("")}
                    style={{
                      ...getFocusStyle("service"),
                      cursor: "pointer",
                      appearance: "none" as const,
                    }}
                  >
                    <option
                      value=""
                      style={{ background: "#2A1F17", color: "#9A7B5C" }}
                    >
                      Select a service…
                    </option>
                    {SERVICES.map((s) => (
                      <option
                        key={s}
                        value={s}
                        style={{ background: "#2A1F17", color: "#E8C99A" }}
                      >
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="appt-date" style={labelStyle}>
                    Preferred Date
                  </label>
                  <input
                    id="appt-date"
                    type="date"
                    value={form.date}
                    data-ocid="appointment.date_input"
                    onChange={(e) => handleChange("date", e.target.value)}
                    onFocus={() => setFocused("date")}
                    onBlur={() => setFocused("")}
                    style={getFocusStyle("date")}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="appt-message" style={labelStyle}>
                    Special Requirements
                  </label>
                  <textarea
                    id="appt-message"
                    rows={4}
                    placeholder="Tell us about your event, inspiration, or any special requirements…"
                    value={form.message}
                    data-ocid="appointment.textarea"
                    onChange={(e) => handleChange("message", e.target.value)}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    style={{
                      ...getFocusStyle("message"),
                      resize: "vertical",
                      minHeight: 100,
                    }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  data-ocid="appointment.submit_button"
                  style={{
                    width: "100%",
                    padding: "16px 32px",
                    background:
                      "linear-gradient(135deg, #C4956A 0%, #8B5E3C 100%)",
                    color: "#FFF8F0",
                    border: "none",
                    borderRadius: 14,
                    fontSize: 15,
                    fontWeight: 800,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
                    boxShadow:
                      "0 6px 28px rgba(196,149,106,0.4), 0 0 0 0 rgba(196,149,106,0)",
                    fontFamily: "var(--font-body)",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const btn = e.currentTarget;
                    btn.style.transform = "translateY(-2px) scale(1.01)";
                    btn.style.boxShadow =
                      "0 12px 36px rgba(196,149,106,0.5), 0 0 30px rgba(196,149,106,0.2)";
                  }}
                  onMouseLeave={(e) => {
                    const btn = e.currentTarget;
                    btn.style.transform = "translateY(0) scale(1)";
                    btn.style.boxShadow = "0 6px 28px rgba(196,149,106,0.4)";
                  }}
                >
                  ✦ Confirm Appointment ✦
                </button>
              </div>
            </form>

            {/* WhatsApp alternative */}
            <div style={{ marginTop: 20, textAlign: "center" }}>
              <div
                style={{
                  fontSize: 13,
                  color: "#9A7B5C",
                  marginBottom: 12,
                  letterSpacing: "0.04em",
                }}
              >
                — or book instantly via —
              </div>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="appointment.whatsapp_button"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 32px",
                  background: "linear-gradient(135deg, #25D366, #128C7E)",
                  color: "#fff",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: 14,
                  borderRadius: 50,
                  letterSpacing: "0.06em",
                  transition: "all 0.3s ease",
                  boxShadow: "0 6px 24px rgba(37,211,102,0.35)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(-2px)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 10px 32px rgba(37,211,102,0.5)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 6px 24px rgba(37,211,102,0.35)";
                }}
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes floatOrb0 { from { transform: translate(0,0) scale(1); } to { transform: translate(20px, -30px) scale(1.05); } }
        @keyframes floatOrb1 { from { transform: translate(0,0) scale(1); } to { transform: translate(-25px, 20px) scale(0.95); } }
        @keyframes floatOrb2 { from { transform: translate(0,0) scale(1); } to { transform: translate(15px, 25px) scale(1.08); } }
        @keyframes particleDrift { from { transform: translateY(0); opacity: 0.4; } to { transform: translateY(-18px); opacity: 1; } }
        @keyframes successPop { from { opacity: 0; transform: scale(0.9) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        #appt-name::placeholder, #appt-phone::placeholder, #appt-email::placeholder, #appt-date::placeholder, #appt-message::placeholder { color: rgba(154,123,92,0.6); }
        input[type='date']::-webkit-calendar-picker-indicator { filter: invert(0.7) sepia(1) saturate(2) hue-rotate(5deg); cursor: pointer; }
      `}</style>
    </section>
  );
}
