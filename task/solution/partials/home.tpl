<input type="text" id="user-input">
<button class="btn btn-primary" id="add-btn">Add</button>

<ul>
<% _.each(users, function (user) { %>
  <li><%= user.name %></li>
<% }); %>
</ul>
