export default async function getFeed(setPosts) {
    try {
        let response = await fetch('https://cors-anywhere.herokuapp.com/https://pastebin.com/raw/tG2Ucdxx');
        if (!response.ok) {
            throw new Error('Something went wrong!');
        }
        let json = await response.json();
        setPosts(json);
    } catch(error) {
        alert(error);
    }
}