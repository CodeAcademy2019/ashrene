const html = require("./tagged-template-string")

test("Should replace html unsafe characters",() => {
    expect(html(["<b>", " says</b>: "],"Ian Hickson" ,"Speaking of which, we added the first draft of the <canvas> element to the Web Apps 1.0 draft proposal specification the other day.\"")).toEqual("<b>Ian Hickson says</b>: \"Speaking of which, we added the first draft of the &lt;canvas&gt; element to the Web Apps 1.0 draft proposal specification the other day.&quot;\"");
})
