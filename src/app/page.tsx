'use client';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

import { useId, useState } from 'react';

type listType = {
	name: string;
	content: string;
};

type cardType = {
	name: string;
	contents: string[];
};

export default function Home() {
	const mock_list: listType[] = [
		{
			name: '홍길동',
			content: '새로운 기술 배우기 새로운 기술 배우기 새로운 기술 배우기',
		},
		{
			name: '홍길동2',
			content: '마음 챙기기 마음 챙기기 마음 챙기기 마음 챙기기',
		},
		{
			name: '홍길동3',
			content:
				'건강한 습관 실천하기 건강한 습관 실천하기 건강한 습관 실천하기 ',
		},
		{
			name: '홍길동4',
			content:
				'네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기',
		},
	];

	const mock_cards: cardType[] = [
		{
			name: '홍길동',
			contents: [
				'마음 챙기기 마음 챙기기 마음 챙기기 마음 챙기기',
				'건강한 습관 실천하기 건강한 습관 실천하기 건강한 습관 실천하기 ',
				'네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기',
			],
		},

		{
			name: '홍길동2',
			contents: [
				'마음 챙기기 마음 챙기기 마음 챙기기 마음 챙기기',
				'건강한 습관 실천하기 건강한 습관 실천하기 건강한 습관 실천하기 ',
				'네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기',
			],
		},
		{
			name: '홍길동3',
			contents: [
				'마음 챙기기 마음 챙기기 마음 챙기기 마음 챙기기',
				'건강한 습관 실천하기 건강한 습관 실천하기 건강한 습관 실천하기 ',
				'네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기 네트워크 확장하기',
			],
		},
	];

	const [tab, setTab] = useState<string>('list');

	return (
		<div className="flex flex-col h-screen w-full px-30px">
			<div className="w-full p-10px">
				<h1 className="text-24px font-bold">Time Capsule</h1>
				<p className="mt-10px">
					Lorem ipsum dolor sit amet consectetur.
				</p>
			</div>
			<div className="h-screen flex border-t border-solid border-slate-300 mt-10px pt-10px">
				<div className="flex-shrink-0 w-[200px] bg-slate-200 h-full">
					<ul className="w-full bg-white">
						<li>
							<Link
								className={buttonVariants({
									variant: 'ghost',
									className: 'w-full !justify-start',
								})}
								href={'/'}
								onClick={() => setTab('list')}
							>
								리스트 보기
							</Link>
						</li>
						<li>
							<Button
								variant="ghost"
								className="w-full !justify-start"
								onClick={() => setTab('card')}
							>
								카드 보기
							</Button>
						</li>
					</ul>
				</div>
				{/* contents */}
				<div className="w-full">
					{tab === 'list' && (
						<Table className="max-w-full p-10px">
							<TableHeader>
								<TableRow>
									<TableHead className="w-[100px] text-center">
										이름
									</TableHead>
									<TableHead className="text-center">
										목표
									</TableHead>
									<TableHead className="text-center">
										달성
									</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								{mock_list.map((item) => (
									<TableRow key={item.name}>
										<TableCell className="font-medium">
											{item.name}
										</TableCell>
										<TableCell>{item.content}</TableCell>
										<TableCell className="text-center">
											<Checkbox />
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					)}
					{tab === 'card' && (
						<div
							style={{
								display: 'grid',
								gridTemplateRows: '1fr 1fr 1fr',
								gap: '10px',
							}}
							className="p-30px"
						>
							{mock_cards.map((item) => (
								<Card key={item.name}>
									<CardHeader>
										<CardTitle>{item.name}</CardTitle>
										<CardDescription>
											올 한해 목표
										</CardDescription>
									</CardHeader>
									<CardContent>
										<ul className="flex flex-col gap-2">
											{item.contents.map((txt) => (
												<li key={txt}>
													<CheckBox2 text={txt} />
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

const CheckBox2 = ({ text }: { text: string }) => {
	const id = useId();
	return (
		<div className="flex items-center space-x-2">
			<Checkbox id={id} />
			<label
				htmlFor={id}
				className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
			>
				{text}
			</label>
		</div>
	);
};
