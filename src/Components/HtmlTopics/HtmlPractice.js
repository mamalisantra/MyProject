
export default function HtmlPracticeComponent() {
    return (<>
       # attributes--- gives additional info about the html tag <br/>
       The HTML standard does not require lowercase attribute names.
       The title attribute (and all other attributes) can be written with uppercase or lowercase like title or TITLE.
       Double quotes around attribute values are the most common in HTML, but single quotes can also be used.

In some situations, when the attribute value itself contains double quotes, it is necessary to use single quotes:
       # src---- 2types <br/>
          absolute url---- external website url ----Example: src="https://www.w3schools.com/images/img_girl.jpg" <br/>
          relative url---- with in the context -----Example: src="/images/img_girl.jpg".<br/>
        <p title="I'm a tooltip">This is a paragraph.</p><br/>
        The title attribute defines some extra information about an element.

pre-----------Preserve all the spaces and line break

    </>)
}