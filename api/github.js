export default async function handler(req, res) {
    const username = process.env.REACT_APP_GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;
    const apiBase = process.env.REACT_APP_GITHUB_API || "https://api.github.com";

    try {
        const headers = {
            Accept: "application/vnd.github.v3+json",
            ...(token && { Authorization: `token ${token}` }),
        };

        const response = await fetch(`${apiBase}/users/${username}/repos`, { headers });

        if (!response.ok) {
            const text = await response.text();
            return res.status(response.status).json({ error: text });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (err) {
        console.error("Erreur API GitHub :", err);
        return res.status(500).json({ error: "Erreur interne du serveur" });
    }
}
