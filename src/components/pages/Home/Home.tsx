'use client';

import { Prisma } from '@prisma/client';
import { Routes } from '@/constants';
import { LinkButton, Heading } from '@/components/ui';

export interface PostPreviewProps {
    post: Prisma.PostUncheckedCreateInput;
}

export const PostPreview = ({ post }: PostPreviewProps) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 pt-5">
            <Heading level={2}>{post.title}</Heading>
            <LinkButton href={Routes.POST.replace(':id', String(post.id))}>
                {'>'}
            </LinkButton>
        </div>
    );
};

export interface HomePageComponentProps {
    posts: Prisma.PostUncheckedCreateInput[];
}

export const Home = ({ posts }: HomePageComponentProps) => {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center gap-3">
            <Heading>Idle Game</Heading>
            <LinkButton href={Routes.GAME}>Play</LinkButton>
            <div className="flex flex-row items-center justify-start gap-3">
                {posts.map((post: Prisma.PostUncheckedCreateInput) => (
                    <PostPreview post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
};
