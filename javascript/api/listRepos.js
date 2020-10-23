const projects = document.getElementById("projects");

function listRepos() {
	fetch(`https://api.github.com/users/Andrierlison/repos`)
		.then((response) => response.json())
		.then((data) => {
			data.map((data) => {
				const li = document.createElement("li");
				const a = document.createElement("a");

				const content = document.createTextNode(data.name);

				a.setAttribute("href", `${data.html_url}`);
				a.appendChild(content);
				li.appendChild(a);
				projects.appendChild(li);
			});
		});
}

listRepos();
