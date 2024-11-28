import { Grid2X2, Minus, Plus, Search, ShoppingBasket } from 'lucide-react';
import * as React from 'react';
import { Fragment } from 'react/jsx-runtime';

import { Button } from './components/ui/button';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from './components/ui/dropdown-menu';
import { Input } from './components/ui/input';
import { Separator } from './components/ui/separator';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './components/ui/sheet';

export function App(): React.ReactElement {
	const [category, setCategory] = React.useState<string>('tapetes');

	return (
		<Fragment>
			<header className="w-screen fixed top-0 left-0 border shadow-md py-6 flex justify-center">
				<nav className="container flex items-center">
					<section className="flex gap-4 items-center">
						<a
							href="/"
							className="mr-8 text-green-600 font-extrabold text-3xl"
						>
							<h1>ConAmaz</h1>
							{/* <img
								alt="Store Logo"
								src="/logo.png"
								className="max-w-40 w-full h-12"
							/> */}
						</a>

						<DropdownMenu>
							<DropdownMenuTrigger
								asChild
								className="px-5 py-5 max-w-44 w-full rounded-full text-lg"
							>
								<Button
									variant="outline"
									className="flex gap-1 w-full text-[#585500] hover:text-[#text-[#585500]]"
								>
									<Grid2X2 className="w-4 h-4" />
									<span className="text-md font-normal ">Categoria</span>
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent className="text-[#585500] min-w-44 w-full rounded-3xl">
								<DropdownMenuLabel>Filtrar por</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuRadioGroup
									value={category}
									onValueChange={(category) => setCategory(category)}
								>
									<DropdownMenuRadioItem
										value="tapetes"
										className=" hover:bg-[#585500] hover:text-white"
									>
										Tapetes
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem
										value="tiaras"
										className=" hover:bg-[#585500] hover:text-white"
									>
										Tiaras
									</DropdownMenuRadioItem>
									<DropdownMenuRadioItem
										value="colares"
										className=" hover:bg-[#585500] hover:text-white"
									>
										Colares
									</DropdownMenuRadioItem>
								</DropdownMenuRadioGroup>
							</DropdownMenuContent>
						</DropdownMenu>

						<div className="relative flex flex-1">
							<Input
								placeholder="Pesquisar"
								className="pl-12 py-5 w-full rounded-full text-lg text-[#585500]"
							/>
							<Button
								className="px-0 py-0 absolute left-0 top-0 flex justify-center w-12 h-[42px] items-center z-10 rounded-full text-[#585500] hover:text-[#08BD1E]"
								variant="ghost"
							>
								<Search className="w-6 h-6  opacity-50 " />
							</Button>
						</div>
					</section>
					<section className="flex gap-2 justify-end flex-1">
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									className="flex gap-1"
								>
									<ShoppingBasket />
									<span className="bg-[#08BD1E] text-white px-2 py-1 rounded-full font-bold text-xs">
										0
									</span>
								</Button>
							</SheetTrigger>
							<SheetContent className="flex flex-col gap-3 overflow-hidden">
								<SheetHeader>
									<SheetTitle className="text-[#585500]">
										Meu carrinho
									</SheetTitle>
									<SheetDescription className="text-[#585500]">
										Olá, <strong>Marcos</strong>! Você tem 2 itens no seu
										carrinho.
									</SheetDescription>
								</SheetHeader>
								<Separator />
								<div className="flex flex-col gap-4	w-full overflow-y-auto pb-28">
									{[
										{
											id: 1,
											title: '1kg de Macaxeira',
											price: 5.0,
											image:
												'https://img.freepik.com/free-photo/composition-nutritious-cassava-roots-sliced_23-2149091027.jpg?t=st=1732768619~exp=1732772219~hmac=cfe9da38ed08aeb6e3674db02941e7b3def47febb56488fb4c27fa9cd7904dde&w=1380',
										},
										{
											id: 4,
											title: '10kg de macaxeira',
											price: 5.0,
											image:
												'https://img.freepik.com/free-photo/delicious-pineapple-still-life_23-2150408041.jpg?t=st=1732768856~exp=1732772456~hmac=e8ea442310000407712989d698ce6446b60c50a782706d6d0ba1b5c65b65ee23&w=1380',
										},
										{
											id: 3,
											title: '1kg de Laranja',
											price: 5.0,
											image:
												'https://img.freepik.com/free-photo/delicious-orange-white_144627-16391.jpg?t=st=1732769084~exp=1732772684~hmac=c2771d772694346b7bc9e2e6cab3676802c9d6e2a3e21912c9969b216a41975f&w=740',
										},
										{
											id: 4,
											title: '1kg de Mapati',
											price: 5.0,
											image:
												'https://img.freepik.com/free-photo/red-grapes_1232-1797.jpg?t=st=1732769173~exp=1732772773~hmac=035e7288f8479ab83fbcc57ed5d3e75a4ece64a51b1c6c5973231c635508b9e1&w=1380',
										},
									].map((item) => {
										// eslint-disable-next-line react-hooks/rules-of-hooks
										const [count, setCount] = React.useState(0);

										return (
											<aside
												key={item.id}
												className="flex flex-1 w-full gap-4 border border-[#585500] p-2 rounded-md "
											>
												<div className="w-[80px] h-[80px]">
													<img
														className="w-full h-full border-[#585500] rounded-lg border-2"
														src={item.image}
														alt="Produto 1"
													/>
												</div>
												<div className="flex flex-col gap-3 flex-1 w-full">
													<h3 className="text-[#585500]">{item.title}</h3>

													<div className="flex gap-2 items-center w-full">
														<span className="text-md">
															R$ {item.price.toFixed(2).replace('.', ',')}
														</span>

														<div className="flex justify-end items-end flex-1">
															<Button
																className="w-7 h-7 p-0 flex justify-center items-center bg-[#585500] text-white hover:bg-[#585500]"
																variant="ghost"
																onClick={() =>
																	setCount((state) =>
																		state > 0 ? state - 1 : 0,
																	)
																}
															>
																<Minus className="w-5 h-5 text-white hover:text-white" />
															</Button>
															<span className="w-7 h-7 flex justify-center items-center text-xl text-[#585500]">
																{count}
															</span>
															<Button
																className="w-7 h-7 p-0 flex justify-center items-center bg-[#585500] text-white hover:bg-[#585500]"
																variant="ghost"
																onClick={() => setCount((state) => state + 1)}
															>
																<Plus className="w-5 h-5 text-white hover:text-white" />
															</Button>
														</div>
													</div>
												</div>
											</aside>
										);
									})}
								</div>
								<SheetFooter className="w-full flex sm:flex-col gap-4 flex-1 absolute bottom-0 left-0 py-6 px-4 bg-primary-foreground">
									<div className="flex flex-1 justify-between">
										<h3>Total</h3>
										<span className="font-bold">R$ 20,00</span>
									</div>

									<SheetClose
										asChild
										className="w-full flex flex-1"
									>
										<Button
											type="submit"
											className="bg-[#08BD1E] w-full"
										>
											Comprar agora
										</Button>
									</SheetClose>
								</SheetFooter>
							</SheetContent>
						</Sheet>

						<Button className="bg-[#08BD1E]">Minha conta</Button>
					</section>
				</nav>
			</header>

			<section className="pt-72 container pb-20">
				<section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
					{[
						{
							id: 1,
							title: '1kg de Macaxeira',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/composition-nutritious-cassava-roots-sliced_23-2149091027.jpg?t=st=1732768619~exp=1732772219~hmac=cfe9da38ed08aeb6e3674db02941e7b3def47febb56488fb4c27fa9cd7904dde&w=1380',
						},
						{
							id: 4,
							title: '10kg de macaxeira',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/delicious-pineapple-still-life_23-2150408041.jpg?t=st=1732768856~exp=1732772456~hmac=e8ea442310000407712989d698ce6446b60c50a782706d6d0ba1b5c65b65ee23&w=1380',
						},
						{
							id: 3,
							title: '1kg de Laranja',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/delicious-orange-white_144627-16391.jpg?t=st=1732769084~exp=1732772684~hmac=c2771d772694346b7bc9e2e6cab3676802c9d6e2a3e21912c9969b216a41975f&w=740',
						},
						{
							id: 4,
							title: '1kg de Mapati',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/red-grapes_1232-1797.jpg?t=st=1732769173~exp=1732772773~hmac=035e7288f8479ab83fbcc57ed5d3e75a4ece64a51b1c6c5973231c635508b9e1&w=1380',
						},
						{
							id: 5,
							title: '1kg de Macaxeira',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/composition-nutritious-cassava-roots-sliced_23-2149091027.jpg?t=st=1732768619~exp=1732772219~hmac=cfe9da38ed08aeb6e3674db02941e7b3def47febb56488fb4c27fa9cd7904dde&w=1380',
						},
						{
							id: 6,
							title: '10kg de macaxeira',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/delicious-pineapple-still-life_23-2150408041.jpg?t=st=1732768856~exp=1732772456~hmac=e8ea442310000407712989d698ce6446b60c50a782706d6d0ba1b5c65b65ee23&w=1380',
						},
						{
							id: 7,
							title: '1kg de Laranja',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/delicious-orange-white_144627-16391.jpg?t=st=1732769084~exp=1732772684~hmac=c2771d772694346b7bc9e2e6cab3676802c9d6e2a3e21912c9969b216a41975f&w=740',
						},
						{
							id: 8,
							title: '1kg de Mapati',
							price: 5.0,
							image:
								'https://img.freepik.com/free-photo/red-grapes_1232-1797.jpg?t=st=1732769173~exp=1732772773~hmac=035e7288f8479ab83fbcc57ed5d3e75a4ece64a51b1c6c5973231c635508b9e1&w=1380',
						},
					].map((item) => (
						<aside
							className="max-w-xs w-full flex gap-2 justify-center items-center flex-col border-[#585500]"
							key={item.id}
						>
							<img
								style={{ width: '200px', height: '200px' }}
								src={item.image}
								alt="Image"
								loading="lazy"
								className="border-[#585500] rounded-lg"
							/>

							<div className="flex flex-col w-full justify-center items-center">
								<a className="text-center cursor-pointer text-[#585500]">
									{item.title}
								</a>

								<span className="font-bold text-[#585500]">
									R$ {item.price.toFixed(2).replace('.', ',')}
								</span>
							</div>
						</aside>
					))}
				</section>
			</section>
		</Fragment>
	);
}
