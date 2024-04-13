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
							className="mr-8"
						>
							<img
								alt="Store Logo"
								src="/logo.png"
								className="max-w-40 w-full h-12"
							/>
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
									{Array.from({ length: 4 }).map((_, index) => {
										const [count, setCount] = React.useState(0);

										return (
											<aside
												key={index}
												className="flex flex-1 w-full gap-4 border border-[#585500] p-2 rounded-md "
											>
												<div className="w-[80px] h-[80px]">
													<img
														className="w-full h-full border-[#585500] rounded-lg border-2"
														src="https://images.tcdn.com.br/img/img_prod/763583/tiara_com_aplicacao_de_perola_emilli_9221_1_a5369fc3e8183f5a0211c1337fb6080b_20240209155117.jpg"
														alt="Produto 1"
													/>
												</div>
												<div className="flex flex-col gap-3 flex-1 w-full">
													<h3 className="text-[#585500]">
														Tiara de bolinhas {index + 1}
													</h3>

													<div className="flex gap-2 items-center w-full">
														<span className="text-md">R$ 8.599,90</span>

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
										<span className="font-bold">R$ 8.599,90</span>
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
				<section className="grid grid-cols-6 gap-8">
					{Array.from({ length: 8 }).map((_, index) => (
						<aside
							className="max-w-xs w-full flex gap-2 justify-center items-center flex-col border-[#585500]"
							key={index}
						>
							<img
								src="https://images.tcdn.com.br/img/img_prod/763583/tiara_com_aplicacao_de_perola_emilli_9221_1_a5369fc3e8183f5a0211c1337fb6080b_20240209155117.jpg"
								alt="Image"
								loading="lazy"
								className="w-44 h-44 border-[#585500] rounded-lg"
							/>

							<div className="flex flex-col w-full justify-center items-center">
								<a className="text-center cursor-pointer text-[#585500]">
									Tiara de Bolinhas {index + 1}
								</a>

								<span className="font-bold text-[#585500]">R$ 40,00</span>
							</div>
						</aside>
					))}
				</section>
			</section>
		</Fragment>
	);
}
