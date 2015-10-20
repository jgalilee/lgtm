(function() {
  var container = $('div.merge-message .btn.btn-primary.js-merge-branch-action');
  var button = $([
    '<button class="btn btn-primary js-merge-branch-action" type="button" style="margin-left: 0.2rem;">',
      '<img class="emoji" title=":gift_heart:" alt=":gift_heart:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f49d.png" height="20" width="20" align="absmiddle">',
      '<img class="emoji" title=":whale2:" alt=":whale2:" src="https://assets-cdn.github.com/images/icons/emoji/unicode/1f40b.png" height="20" width="20" align="absmiddle">',
    '</button>'
  ].join(''));
  button.click(function() {
    $('div.timeline-comment div.write-content textarea').val(':gift_heart: :whale2:');
    $('div.timeline-comment div.form-actions button:contains(Comment)').click();
  });
  container.after(button);
})();
