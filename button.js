// Create the elements required for the new merge button.
var container = document.querySelector('div.merge-message .btn.btn-primary.js-merge-branch-action');
var button = document.createElement('div');
var imgWhale = document.createElement('img');
var imgHeart = document.createElement('img');
var txtContent = document.createTextNode('\u00a0\u00a0Super Happy Whale!\u00a0\u00a0');

// Define the button to be placed next to the merge button attributes.
button.setAttribute('class', 'btn btn-primary js-merge-branch-action');
button.setAttribute('type', 'button');
button.setAttribute('style', 'margin-left: 0.2rem; max-height: 34px;');

// Define the gift_heart emoji image attributes.
imgHeart.setAttribute('class', 'emoji');
imgHeart.setAttribute('title', ':gift_heart:');
imgHeart.setAttribute('alt', ':gift_heart:');
imgHeart.setAttribute('src', 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f49d.png');
imgHeart.setAttribute('height', '20');
imgHeart.setAttribute('width', '20');
imgHeart.setAttribute('align', 'absmiddle');

// Define the whale2 emoji image attributes.
imgWhale.setAttribute('class', 'emoji');
imgWhale.setAttribute('title', ':whale2:');
imgWhale.setAttribute('alt', ':whale2:');
imgWhale.setAttribute('src', 'https://assets-cdn.github.com/images/icons/emoji/unicode/1f40b.png');
imgWhale.setAttribute('height', '20');
imgWhale.setAttribute('width', '20');
imgWhale.setAttribute('align', 'absmiddle');

// Add the click event listener for when the user wants to auto-submit their
// comment.
button.addEventListener('click', function () {
    var commentBox = document.querySelector('div.timeline-comment div.write-content textarea');
    var submitBtn = document.querySelector('div.timeline-comment div.form-actions button:contains(Comment)');

    // Fill in the comment field with the corresponding emoji. Submit this on
    // behalf of the user.
    commentBox.value = ':gift_heart: :whale2:';
    submitBtn.click();
});

// Append the elements to their appropriate parents.
button.appendChild(imgHeart);
button.appendChild(imgWhale);
button.appendChild(txtContent);
container.parentNode.insertBefore(button, container.nextSibling);
