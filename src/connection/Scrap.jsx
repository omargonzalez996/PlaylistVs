export async function getPlayListID(playListUrl) {
    return new Promise(async (resolve, reject) => {
        try {
            const playlistIdRegex = /[&?]list=([a-zA-Z0-9_-]+)/;
            const match = await playListUrl.match(playlistIdRegex);
            if (match && match[1]) {
                resolve(match[1]);
            }
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })
}

export async function getPlaylistUrls(playlistId) {
    const apiKey = import.meta.env.VITE_API_KEY;
    return new Promise(async (resolve, reject) => {
        try {
            await fetch(
                `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${apiKey}`
            )
                .then(response => response.json())
                .then(data => {
                    //const videoUrls = data.items.map(item => `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`);
                    const videoUrls = data.items.map(item => `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`);
                    //console.log(videoUrls);
                    resolve(videoUrls)
                })
                .catch(error => {
                    console.error('Error al cargar la playlist:', error);
                });
        } catch (error) {
            console.log(error);
            reject(error)
        }
    })

}