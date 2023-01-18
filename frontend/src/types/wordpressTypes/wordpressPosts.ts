export interface WordpressPosts {
    id:                       number;
    date:                     Date;
    date_gmt:                 Date;
    guid:                     GUID;
    modified:                 Date;
    modified_gmt:             Date;
    slug:                     string;
    status:                   StatusEnum;
    type:                     WordpressPostType;
    link:                     string;
    title:                    GUID;
    content:                  Content;
    excerpt:                  Content;
    author:                   number;
    featured_media:           number;
    comment_status:           Status;
    ping_status:              Status;
    sticky:                   boolean;
    template:                 string;
    format:                   Format;
    meta:                     Meta;
    categories:               number[];
    tags:                     any[];
    yoast_head:               string;
    yoast_head_json:          YoastHeadJSON;
    rttpg_featured_image_url: { [key: string]: Array<boolean | number | string> };
    rttpg_author:             RttpgAuthor;
    rttpg_comment:            number;
    rttpg_category:           string;
    rttpg_excerpt:            string;
    _links:                   Links;
}

export interface Links {
    self:                  About[];
    collection:            About[];
    about:                 About[];
    author:                AuthorElement[];
    replies:               AuthorElement[];
    "version-history":     VersionHistory[];
    "predecessor-version": PredecessorVersion[];
    "wp:featuredmedia":    AuthorElement[];
    "wp:attachment":       About[];
    "wp:term":             WpTerm[];
    curies:                Cury[];
}

export interface About {
    href: string;
}

export interface AuthorElement {
    embeddable: boolean;
    href:       string;
}

export interface Cury {
    name:      Name;
    href:      Href;
    templated: boolean;
}

export enum Href {
    HTTPSAPIWOrgRel = "https://api.w.org/{rel}",
}

export enum Name {
    Wp = "wp",
}

export interface PredecessorVersion {
    id:   number;
    href: string;
}

export interface VersionHistory {
    count: number;
    href:  string;
}

export interface WpTerm {
    taxonomy:   Taxonomy;
    embeddable: boolean;
    href:       string;
}

export enum Taxonomy {
    Category = "category",
    PostTag = "post_tag",
}

export enum Status {
    Open = "open",
}

export interface Content {
    rendered:  string;
    protected: boolean;
}

export enum Format {
    Standard = "standard",
}

export interface GUID {
    rendered: string;
}

export interface Meta {
    _mi_skip_tracking: boolean;
}

export interface RttpgAuthor {
    display_name: string;
    author_link:  string;
}

export enum StatusEnum {
    Publish = "publish",
}

export enum WordpressPostType {
    Post = "post",
}

export interface YoastHeadJSON {
    title:                  string;
    robots:                 Robots;
    canonical:              string;
    og_locale:              OgLocale;
    og_type:                OgType;
    og_title:               string;
    og_description:         string;
    og_url:                 string;
    og_site_name:           OgSiteName;
    article_published_time: Date;
    article_modified_time?: Date;
    og_image:               OgImage[];
    author:                 string;
    twitter_card:           TwitterCard;
    twitter_misc:           TwitterMisc;
    schema:                 Schema;
}

export interface OgImage {
    width:  number;
    height: number;
    url:    string;
    type:   OgImageType;
}

export enum OgImageType {
    ImageJPEG = "image/jpeg",
}

export enum OgLocale {
    NlNL = "nl_NL",
}

export enum OgSiteName {
    RTVKrimpenerwaard = "RTV Krimpenerwaard",
}

export enum OgType {
    Article = "article",
}

export interface Robots {
    index:               Index;
    follow:              Follow;
    "max-snippet":       MaxSnippet;
    "max-image-preview": MaxImagePreview;
    "max-video-preview": MaxVideoPreview;
}

export enum Follow {
    Follow = "follow",
}

export enum Index {
    Index = "index",
}

export enum MaxImagePreview {
    MaxImagePreviewLarge = "max-image-preview:large",
}

export enum MaxSnippet {
    MaxSnippet1 = "max-snippet:-1",
}

export enum MaxVideoPreview {
    MaxVideoPreview1 = "max-video-preview:-1",
}

export interface Schema {
    "@context": string;
    "@graph":   Graph[];
}

export interface Graph {
    "@type":          GraphType;
    "@id":            string;
    url?:             string;
    name?:            string;
    isPartOf?:        BreadcrumbClass;
    datePublished?:   Date;
    dateModified?:    Date;
    author?:          BreadcrumbClass;
    breadcrumb?:      BreadcrumbClass;
    inLanguage?:      InLanguage;
    potentialAction?: PotentialAction[];
    itemListElement?: ItemListElement[];
    description?:     Description;
    image?:           Image;
    sameAs?:          string[];
}

export enum GraphType {
    BreadcrumbList = "BreadcrumbList",
    Person = "Person",
    WebPage = "WebPage",
    WebSite = "WebSite",
}

export interface BreadcrumbClass {
    "@id": string;
}

export enum Description {
    DeLokaleOmroepVoorDeKrimpenerwaard = "De lokale omroep voor de Krimpenerwaard",
}

export interface Image {
    "@type":    ImageType;
    inLanguage: InLanguage;
    "@id":      string;
    url:        string;
    contentUrl: string;
    caption:    string;
}

export enum ImageType {
    ImageObject = "ImageObject",
}

export enum InLanguage {
    Nl = "nl",
}

export interface ItemListElement {
    "@type":  ItemListElementType;
    position: number;
    name:     string;
    item?:    string;
}

export enum ItemListElementType {
    ListItem = "ListItem",
}

export interface PotentialAction {
    "@type":        PotentialActionType;
    target:         string[] | TargetClass;
    "query-input"?: QueryInput;
}

export enum PotentialActionType {
    ReadAction = "ReadAction",
    SearchAction = "SearchAction",
}

export enum QueryInput {
    RequiredNameSearchTermString = "required name=search_term_string",
}

export interface TargetClass {
    "@type":     TargetType;
    urlTemplate: URLTemplate;
}

export enum TargetType {
    EntryPoint = "EntryPoint",
}

export enum URLTemplate {
    HTTPSWWWRtvkrimpenerwaardNlSiteSSearchTermString = "https://www.rtvkrimpenerwaard.nl/site/?s={search_term_string}",
}

export enum TwitterCard {
    SummaryLargeImage = "summary_large_image",
}

export interface TwitterMisc {
    "Geschreven door":    string;
    "Geschatte leestijd": GeschatteLeestijd;
}

export enum GeschatteLeestijd {
    The1Minuut = "1 minuut",
    The2Minuten = "2 minuten",
    The3Minuten = "3 minuten",
}
