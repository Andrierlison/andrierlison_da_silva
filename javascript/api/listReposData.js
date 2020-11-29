const projects = document.getElementById("projects");

function listRepos() {
	fetch(`https://api.github.com/users/Andrierlison/repos`)
		.then((response) => response.json())
		.then((data) => {
			data.map((data) => {
				const li = document.createElement("li");
				const a = document.createElement("a");
				const repoNames = document.createTextNode(data.name);

				a.setAttribute("href", `${data.html_url}`);
				a.setAttribute("class", "html-url");

				a.appendChild(repoNames);
				li.appendChild(a);
				projects.appendChild(li);

				fetch(
					`https://api.github.com/repos/Andrierlison/${data.name}/languages`
				)
					.then((respose) => respose.json())
					.then((language) => {
						const p = document.createElement("p");
						const repoLanguage = document.createTextNode(
							Object.keys(language).join(" - ")
						);
						p.setAttribute("class", "languages");
						p.appendChild(repoLanguage);
						li.appendChild(p);
					});

				const iframe = document.createElement("iframe");

				iframe.setAttribute("scrolling", "no");
				iframe.setAttribute("src", `${data.homepage}`);
				iframe.setAttribute("title", `${repoNames}`);

				li.appendChild(iframe);
			});
		});
}
listRepos();
