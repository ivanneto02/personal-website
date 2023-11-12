
/* 
-- Holds user information

google_id will store Google's authentication id.
*/
DROP TABLE IF EXISTS user;
CREATE TABLE user
(
    id INTEGER,
    google_id VARCHAR(255),
    ts TIMESTAMP,
    name VARCHAR(255),
    is_admin BOOLEAN,
    pfp_url VARCHAR(255),
    PRIMARY KEY (id)
);

/*
-- Holds comment information
*/
DROP TABLE IF EXISTS comment;
CREATE TABLE comment
(
    id INTEGER,
    ts TIMESTAMP,
    content TEXT,
    blog_post_id INTEGER,
    user_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (blog_post_id) REFERENCES blog_post(id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

/*
-- Holds blog post information
*/
DROP TABLE IF EXISTS blog_post;
CREATE TABLE blog_post
(
    id INTEGER,
    ts TIMESTAMP,
    content TEXT,
    title VARCHAR(255),
    user_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id)
);

/*
-- Holds tag information
*/
DROP TABLE IF EXISTS tag;
CREATE TABLE tag
(
    id INTEGER,
    ts TIMESTAMP,
    name TEXT,
    PRIMARY KEY (id)
);

/*
-- Holds blog_post holding tag information
*/
DROP TABLE IF EXISTS blog_post_tag;
CREATE TABLE blog_post_tag
(
    tag_id INTEGER,
    blog_post_id INTEGER,
    ts TIMESTAMP,
    PRIMARY KEY (blog_post_id, tag_id),
    FOREIGN KEY (blog_post_id) REFERENCES blog_post(id),
    FOREIGN KEY (tag_id) REFERENCES tag(id)
);