const query = {
    //Photo
    getPhotos: "SELECT * FROM PHOTO",
    createPhoto: "INSERT INTO PHOTO (PHOTO_DATE_TIME, PHOTO_FILE_PATH, PHOTO_FORMAT, PHOTO_LOCATION, USER_ID) VALUES (@datetime, @filepath, @format, @location, @userid)",
    getPhotoByID: "SELECT * FROM PHOTO WHERE PHOTO_ID = @id",
    deletePhotoByID: "DELETE FROM PHOTO WHERE PHOTO_ID = @id",
    updatePhotoByID: "UPDATE PHOTO SET PHOTO_DATE_TIME = @datetime, PHOTO_FILE_PATH = @filepath, PHOTO_FORMAT = @format, PHOTO_LOCATION = @location, USER_ID = @userid WHERE PHOTO_ID = @id",

    //Album
    getAlbums: "SELECT * FROM ALBUM",
    createAlbum: "INSERT INTO ALBUM (ALBUM_NAME, ALBUM_DESCRIPTION, ALBUM_DATE_CREATED, USER_ID) VALUES (@name, @description, @adatetime, @userid)",
    getAlbumByID: "SELECT * FROM ALBUM WHERE ALBUM_ID = @id",
    deleteAlbumByID: "DELETE FROM ALBUM WHERE ALBUM_ID = @id",
    updateAlbumByID: "UPDATE ALBUM SET ALBUM_NAME = @name, ALBUM_DESCRIPTION = @description, ALBUM_DATE_CREATED = @adatetime, USER_ID = @userid WHERE ALBUM_ID = @id",

    //PhotoTag
    getPhotoTags: "SELECT * FROM PHOTO_TAG WHERE PHOTO_ID = @id",
    createPhotoTag: "INSERT INTO PHOTO_TAG (PHOTO_ID, TAG) VALUES (@photoid, @tag )",
    deletePhotoTag: "DELETE FROM PHOTO_TAG WHERE PHOTO_ID = @id AND TAG = @tag",

    //PhotoAlbum
    getAlbumPhotos: "SELECT PHOTO_ID FROM ALBUM_PHOTO WHERE ALBUM_ID = @id",
    addPhotoToAlbum: "INSERT INTO ALBUM_PHOTO (ALBUM_ID, PHOTO_ID) VALUES (@albumid, @photoid)",
    deletePhotoFromAlbum: "DELETE FROM ALBUM WHERE PHOTO_ID = @photoid AND ALBUM_ID = @albumid"


}

module.exports = query;
