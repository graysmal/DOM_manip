"use strict";

let js_body_element = document.createElement('div');
{
    let red_text = document.createElement('p');
    {
        red_text.textContent = "Hey I'm red!";
        red_text.style.color = "red";
    }

    let blue_text = document.createElement('h3');
    {
        blue_text.textContent = "I'm a blue h3!";
        blue_text.style.color = "blue";
    }

    let div_group = document.createElement('div');
    {
        div_group.classList.add('pink_bg');
        div_group.classList.add('black_bd');

        let entitled_header = document.createElement('h1');
        entitled_header.textContent = "I'm in a div";

        let over_confident_paragraph = document.createElement('p');
        over_confident_paragraph.textContent = "ME TOO!";

        div_group.append(entitled_header, over_confident_paragraph);
    }


    js_body_element.append(red_text, blue_text, div_group);
}
document.body.append(js_body_element);