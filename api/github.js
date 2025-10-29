export default async function handler(req, res) {
    try {
        const username = "zpilia";
        const response = await fetch(`https://api.github.com/users/${username}/repos`, {
            headers: {
                Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                Accept: "application/vnd.github+json",
            },
        });

        if (!response.ok) {
            console.error("GitHub API error:", response.status, response.statusText);
            return res.status(response.status).json({
                error: "GitHub API request failed",
                status: response.status,
                message: response.statusText,
            });
        }

        const data = await response.json();
        const filtered = data.filter((repo) => !repo.fork && !repo.private);
        res.status(200).json(filtered);
    } catch (err) {
        console.error("Internal server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
}
