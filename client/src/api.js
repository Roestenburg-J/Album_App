export const getImages = async () => {

    const response = await fetch('http://localhost:3000/url/1');
    const responseJson = await response.json();

    return responseJson;
};