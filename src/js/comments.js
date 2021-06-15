import { COMMENTS_API } from "../constants/api";
import { APIRequest } from "./api";

const Comments = () => {
	const COMMENTS_HOLDER = document.querySelector("#commentsMain");
	const COMMENTS_COUNT = document.querySelector(".comments__count");
	const SORT_BY_LIKES = document.querySelector("#sortByLikes");
	const SORT_BY_NEWEST = document.querySelector("#sortByNewest");

	let commentData = [];

	document.addEventListener("DOMContentLoaded", async () => {
		commentData = await APIRequest(COMMENTS_API);

		displayComments(commentData);
	});

	const displayComments = (commentsList) => {
		let template = "";
		commentsList.map((comment) => {
			template += `<div class='comments__item border-bottom push-bottom'>
                <div class='comments__item-header'>
                    <div><span class='comments__item-name'>${
											comment.name
										}</span> 
                    <span class='comments__item-date'>${new Date(
											comment.date
										).toLocaleString("en-GB")}</span></div> 
                    <span class='comments__item-likes'>${
											comment.likes
										} Likes</span>
                </div>
                <div class='comments__item-body'>
                ${comment.body}
                </div>
            </div>`;
		});

		COMMENTS_COUNT.innerHTML = `${commentData.length} Comments`;
		COMMENTS_HOLDER.innerHTML = template;
	};

	SORT_BY_LIKES.addEventListener("click", () =>
		displayComments(
			commentData.sort((a, b) => {
				return b.likes - a.likes;
			})
		)
	);

	SORT_BY_NEWEST.addEventListener("click", () =>
		displayComments(
			commentData.sort((a, b) => {
				return new Date(b.date) - new Date(a.date);
			})
		)
	);
};

export default Comments;
