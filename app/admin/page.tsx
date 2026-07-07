"use client";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import Link from "next/link";

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [stats, setStats] = useState({
    articles: 0, users: 0, pending: 0, founders: 0
  });
  const [newArticle, setNewArticle] = useState({
    title: "", author: "", category: "Startups",
    content: "", image_url: ""
  });
  const [publishSuccess, setPublishSuccess] = useState(false);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) { window.location.href = "/login"; return; }
    const { data: profile } = await supabase
      .from("profiles").select("role").eq("id", user.id).single();
    if (!profile || profile.role !== "admin") {
      window.location.href = "/";
      return;
    }
    setIsAdmin(true);
    loadData();
  };

  const loadData = async () => {
    const [articles, users, subs, founders] = await Promise.all([
      supabase.from("articles").select("id", { count: "exact" }),
      supabase.from("profiles").select("id", { count: "exact" }),
      supabase.from("submissions").select("*").eq("status", "pending"),
      supabase.from("founders").select("id", { count: "exact" }),
    ]);
    setStats({
      articles: articles.count || 0,
      users: users.count || 0,
      pending: subs.data?.length || 0,
      founders: founders.count || 0,
    });
    setSubmissions(subs.data || []);
    setLoading(false);
  };

  const handleSubmission = async (id: string, status: string) => {
    await supabase.from("submissions").update({ status }).eq("id", id);
    setSubmissions(submissions.filter(s => s.id !== id));
  };

  const publishArticle = async () => {
    await supabase.from("articles").insert({
      ...newArticle,
      published: true,
      created_at: new Date().toISOString(),
    });
    setPublishSuccess(true);
    setNewArticle({ title: "", author: "", category: "Startups", content: "", image_url: "" });
    setTimeout(() => setPublishSuccess(false), 3000);
  };

  if (loading) return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ fontSize: "18px", color: "#1B2A6B", fontWeight: 700 }}>Loading Admin Dashboard...</div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#faf9f6", padding: "24px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px" }}>
          <div>
            <div style={{ fontSize: "28px", fontWeight: 900 }}>
              <span style={{ color: "#D4A017" }}>ARK</span>
              <span style={{ color: "#0A0A0A" }}> Admin Dashboard</span>
            </div>
            <div style={{ fontSize: "13px", color: "#888", marginTop: "4px" }}>Architects of Rising Knowledge</div>
          </div>
          <Link href="/" style={{
            background: "#1B2A6B", color: "#fff",
            padding: "10px 20px", borderRadius: "999px",
            fontWeight: 700, fontSize: "13px", textDecoration: "none",
          }}>
            ← Back to Site
          </Link>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px", marginBottom: "32px" }}>
          {[
            { label: "Total Articles", value: stats.articles, icon: "📰" },
            { label: "Total Users", value: stats.users, icon: "👤" },
            { label: "Pending Review", value: stats.pending, icon: "⏳" },
            { label: "Total Founders", value: stats.founders, icon: "🚀" },
          ].map(s => (
            <div key={s.label} style={{
              background: "#fff", borderRadius: "12px", padding: "24px",
              borderTop: "4px solid #1B2A6B", boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "32px", marginBottom: "8px" }}>{s.icon}</div>
              <div style={{ fontSize: "32px", fontWeight: 900, color: "#1B2A6B" }}>{s.value}</div>
              <div style={{ fontSize: "12px", color: "#888", fontWeight: 700, textTransform: "uppercase", letterSpacing: "1px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Publish Article */}
        <div style={{ background: "#fff", borderRadius: "12px", padding: "32px", marginBottom: "32px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "20px", borderLeft: "4px solid #D4A017", paddingLeft: "12px" }}>
            📝 Publish New Article
          </h2>
          {publishSuccess && (
            <div style={{ background: "#f0fff4", border: "1px solid #68d391", color: "#276749", padding: "12px", borderRadius: "8px", marginBottom: "16px", fontWeight: 700 }}>
              ✅ Article published successfully! It's now live on the homepage!
            </div>
          )}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              ["Article Title", "title", "text"],
              ["Author Name", "author", "text"],
              ["Image URL", "image_url", "text"],
            ].map(([label, key, type]) => (
              <div key={key}>
                <label style={{ fontSize: "12px", fontWeight: 700, color: "#555", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>{label}</label>
                <input
                  type={type}
                  value={newArticle[key as keyof typeof newArticle]}
                  onChange={(e) => setNewArticle({ ...newArticle, [key]: e.target.value })}
                  style={{ width: "100%", padding: "10px 14px", border: "2px solid #e5e5e5", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box" }}
                />
              </div>
            ))}
            <div>
              <label style={{ fontSize: "12px", fontWeight: 700, color: "#555", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Category</label>
              <select
                value={newArticle.category}
                onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                style={{ width: "100%", padding: "10px 14px", border: "2px solid #e5e5e5", borderRadius: "8px", fontSize: "14px", boxSizing: "border-box" }}
              >
                {["Startups","Tech","Research","Opportunities","Hackathons","Opinion"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div style={{ marginTop: "16px" }}>
            <label style={{ fontSize: "12px", fontWeight: 700, color: "#555", display: "block", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "1px" }}>Content</label>
            <textarea
              value={newArticle.content}
              onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
              placeholder="Write your article content here..."
              style={{ width: "100%", padding: "10px 14px", border: "2px solid #e5e5e5", borderRadius: "8px", fontSize: "14px", height: "150px", boxSizing: "border-box", resize: "vertical" }}
            />
          </div>
          <button
            onClick={publishArticle}
            style={{ marginTop: "16px", background: "#1B2A6B", color: "#fff", border: "none", borderRadius: "999px", padding: "14px 32px", fontWeight: 700, fontSize: "14px", cursor: "pointer" }}
          >
            🚀 Publish Article Live
          </button>
        </div>

        {/* Pending Submissions */}
        <div style={{ background: "#fff", borderRadius: "12px", padding: "32px", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "20px", borderLeft: "4px solid #1B2A6B", paddingLeft: "12px" }}>
            ⏳ Pending Submissions ({submissions.length})
          </h2>
          {submissions.length === 0 ? (
            <div style={{ textAlign: "center", color: "#888", padding: "32px", fontSize: "16px" }}>
              🎉 No pending submissions right now!
            </div>
          ) : (
            submissions.map(s => (
              <div key={s.id} style={{ borderBottom: "1px solid #e5e5e5", paddingBottom: "16px", marginBottom: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "15px" }}>{s.title}</div>
                  <div style={{ fontSize: "12px", color: "#888", marginTop: "4px" }}>By {s.submitted_by} · {s.email}</div>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => handleSubmission(s.id, "approved")} style={{ background: "#27ae60", color: "#fff", border: "none", padding: "8px 18px", borderRadius: "999px", fontWeight: 700, fontSize: "12px", cursor: "pointer" }}>
                    ✅ Approve
                  </button>
                  <button onClick={() => handleSubmission(s.id, "rejected")} style={{ background: "#e74c3c", color: "#fff", border: "none", padding: "8px 18px", borderRadius: "999px", fontWeight: 700, fontSize: "12px", cursor: "pointer" }}>
                    ❌ Reject
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}