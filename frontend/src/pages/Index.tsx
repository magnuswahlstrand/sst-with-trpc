import {trpc} from '../utils/trpc';

export default function IndexPage() {
    const hello = trpc.getUser.useQuery('my id');
    const mutation = trpc.userCreate.useMutation();


    if (!hello.data) return <div>Loading...</div>;


    const onClick = () => {
        const createdUser = mutation.mutate({name: 'John Doe'});
        console.log(createdUser);
    }

    return (
        <div onClick={onClick}>
            <p>{hello.data.id}</p>
            <p>{hello.data.name}</p>
            <p>{mutation.data?.name}</p>
        </div>
    );
}