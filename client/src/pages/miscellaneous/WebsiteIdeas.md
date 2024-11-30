# Website Ideas

This secret part of the website is meant as my own chamber of ideas about what can go on this website!

## Idea 1 (11/29/2024)

Improving the markdown. Current markdown support is OK but there are a couple of things missing:

1. Coding language highlighting - there is none yet :(
2. A way to improve the markdown layout. Currently each page has its own markdown file(s) which it loads and displays, depending on the layout. There is a mix between HTML and markdown. I would like to keep it all markdown but I understand the limitations of markdown, it's not always possible and sometimes good to mix between HTMl and markdown.
3. Better styling. But this applies to the whole website... I currently have inconsistent styles and would want to improve this to be consistent across the whole website. Lots of work to do this but it will come. Working on it :)
4. Make markdown easier to use. This idea applies to every markdown setup I currently have. Let me explain why this is important... What I do currently is when I need a special feature to be displayed on the website in a markdown page, I **MUST** break up the markdown into different files, then I have to load them up in individual pieces as a `<MarkdownSection>` component. Finally, I then have to put the special feature in between the two `<MarkdownSection>` components. This is tedious, and the opposite of what I want for markdown compatibility. Wouldn't it be great if we could specify the special feature already within the `exampleMarkdownFile.md` file? Well, that's what I want :).

## Idea 2 (11/29/2024)

Improving mobile responsiveness. Current responsiveness on mobile is passable (less than OK in my eyes), but there is two big problems:

1. Lack of testing in different mobile environments, and lack of formal responsiveness testing at all.
2. Inconsistent responsiveness for font size. The font sizes do not change, meaning that if a title exceeds the expected page size, the page simply expands. This is not good because it makes the page movement bad since it moves left and right at the same time :[

## Idea 3

## Idea 4

## Idea 5