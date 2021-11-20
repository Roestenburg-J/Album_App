const query = {
    //Photo
    getUserPhotos: "SELECT PUBLIC_ID FROM PHOTO WHERE USER_ID = @id",
    createPhoto: "INSERT INTO PHOTO (PUBLIC_ID, USER_ID, URL) VALUES (@publicid, @userid, @url)",
    getUrl: "SELECT URL FROM PHOTO WHERE USER_ID = @userid",
    getPhotoByID: "SELECT * FROM PHOTO WHERE PHOTO_ID = @id",
    deletePhotoByID: "DELETE FROM PHOTO WHERE PHOTO_ID = @id",
    updatePhotoByID: "UPDATE PHOTO SET PHOTO_DATE_TIME = @datetime, PHOTO_FILE_PATH = @filepath, PHOTO_FORMAT = @format, PHOTO_LOCATION = @location, USER_ID = @userid WHERE PHOTO_ID = @id",

    //Album
    getAlbums: "SELECT * FROM ALBUM WHERE USER_ID = @id",
    createAlbum: "INSERT INTO ALBUM (ALBUM_NAME, ALBUM_DESCRIPTION, ALBUM_DATE_CREATED, USER_ID) VALUES (@name, @description, @adatetime, @userid)",
    getAlbumByID: "SELECT * FROM ALBUM WHERE ALBUM_ID = @id",
    deleteAlbumByID: "DELETE FROM ALBUM WHERE ALBUM_ID = @id",
    updateAlbumByID: "UPDATE ALBUM SET ALBUM_NAME = @name, ALBUM_DESCRIPTION = @description, ALBUM_DATE_CREATED = @adatetime, USER_ID = @userid WHERE ALBUM_ID = @id",

    //PhotoTag
    // getPhotoTags: "SELECT * FROM PHOTO_TAG WHERE PHOTO_ID = @id",
    // createPhotoTag: "INSERT INTO PHOTO_TAG (PHOTO_ID, TAG) VALUES (@photoid, @tag )",
    // deletePhotoTag: "DELETE FROM PHOTO_TAG WHERE PHOTO_ID = @id AND TAG = @tag",

    //PhotoAlbum
    getAlbumPhotos: "SELECT PHOTO_ID FROM ALBUM_PHOTO WHERE ALBUM_ID = @albumid",
    addPhotoToAlbum: "INSERT INTO ALBUM_PHOTO (ALBUM_ID, PHOTO_ID) VALUES (@albumid, @photoid)",
    deletePhotoFromAlbum: "DELETE FROM ALBUM_PHOTO WHERE PHOTO_ID = @photoid AND ALBUM_ID = @albumid",

    //SharePhoto
    getSharedPhotosByUser: "SELECT PHOTO_ID FROM SHARED_PHOTO WHERE USER_ID = @userid",
    sharePhoto: "INSERT INTO SHARED_PHOTO (PHOTO_ID, USER_ID, SHARE_DATE_TIME, USER_FROM) VALUES (@photoid, @userid, @datetime, @userfrom)",
    unsharePhoto: "DELETE FROM SHARED_PHOTO WHERE PHOTO_ID = @photoid AND USER_ID = @userid",

    //ShareAlbum
    getSharedAlbumsByUser: "SELECT ALBUM_ID FROM SHARED_ALBUM WHERE USER_ID = @userid",
    shareAlbum: "INSERT INTO SHARED_ALBUM (ALBUM_ID, USER_ID, SHARE_DATE_TIME, USER_FROM) VALUES (@albumid, @userid, @datetime, @userfrom)",
    unshareAlbum: "DELETE FROM SHARED_ALBUM WHERE ALBUM_ID = @albumid AND USER_ID = @userid"
}

module.exports = query;
