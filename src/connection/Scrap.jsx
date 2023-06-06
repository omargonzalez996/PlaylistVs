export async function getPlayListID(playListUrl) {
    try {
        const playlistIdRegex = /[&?]list=([a-zA-Z0-9_-]+)/;
        const match = await playListUrl.match(playlistIdRegex);

        if (match && match[1]) {
            return match[1];
        }
    } catch (error) {
        console.log('ScrapError:', error);
    }
}

export async function getPlaylistUrls(playlistId) {
    const apiKey = import.meta.env.VITE_API_KEY;
    try {
        await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
        )
            .then(response => response.json())
            .then(data => {
                const videoUrls = data.items.map(item => `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`);
                console.log(videoUrls);
                return videoUrls
            })
            .catch(error => {
                console.error('Error al cargar la playlist:', error);
            }); 
    } catch (error) {
        console.log('Error al cargar la playlist:', error);
    }



}