import React from "react";
import {useState, useCallback} from "react";
import { Layout, Page, Card, Button, DataTable, TextField } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
const img = "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg";

export const Index = () => {
	const [text, setText] = useState('徹子の部屋');
	const [rooms, setRooms] = useState('');
  const handleChange = useCallback((newValue) => setValue(newValue), []);
	const rows = [
		["A商品", "2021年6月1日",'埋め込みタグ'],
		["B商品", "2021年6月1日",'埋め込みタグ'],
		["C商品","2021年6月1日",'埋め込みタグ',],
	];
	return (
		<Page>
			<TitleBar
				title="Sample App"
				primaryAction={{
					content: "Select products",
				}}
			/>
			<Layout>
				<Layout.Section>
					<Card title="ルーム管理" sectioned>
						<DataTable
							columnContentTypes={["text", "numeric", "numeric"]}
							headings={["ルーム名", "部屋の作成日", "アクション"]}
							rows={rows}
						/>
						<form onSubmit={(e) => handleOnSubmit(e)}>
							<TextField
							label="ルーム名"
							value={text}
							onChange={(e) => setText(e.target.value)}
							/>
							<Button
							primary
							onSubmit={(e) => handleOnSubmit(e)}
							>
							部屋を追加する
							</Button>
						</form>
					</Card>
				</Layout.Section>
			</Layout>
		</Page>
	);
};
export default Index;
