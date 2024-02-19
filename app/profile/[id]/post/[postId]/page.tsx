export default function ProfileIdPostId({
	params,
}: {
	params: { postId: string };
}) {
	console.log('PARAMS - postId : ', params.postId);
	return <div>My profile id post id page - postId : {params.postId}</div>;
}
