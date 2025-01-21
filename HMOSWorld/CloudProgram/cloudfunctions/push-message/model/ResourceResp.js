class ResourceResp {
    constructor(id, title, brief, headerImageUrl, type, webUrl, publishDate, topics, viewsCount,
                collectionCount, likesCount, tag, bannerSrc, mediaSrc, isLiked, isCollected,isViewed) {
        this.id = id;
        this.title = title;
        this.brief = brief;
        this.headerImageUrl = headerImageUrl;
        this.type = type;
        this.webUrl = webUrl;
        this.publishDate = publishDate;
        this.topics = topics;
        this.viewsCount = viewsCount;
        this.collectionCount = collectionCount;
        this.likesCount = likesCount;
        this.tag = tag;
        this.bannerSrc = bannerSrc;
        this.mediaSrc = mediaSrc;
        this.isLiked = isLiked;
        this.isCollected = isCollected;
        this.isViewed = isViewed;
    }
}

module.exports = { ResourceResp }