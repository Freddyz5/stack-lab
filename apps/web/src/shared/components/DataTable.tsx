/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React from 'react';
import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@heroui/react';
import { ColumnDef, SortingState, VisibilityState, flexRender, getCoreRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";

interface Pagination {
  pageIndex: number;
  pageSize: number;
}

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	isLoading?: boolean;
	totalData: number;
	pagination: Pagination;
	setPagination: React.Dispatch<React.SetStateAction<Pagination>>;
	filters?: React.ReactNode;
	onRowClick?: (row: any) => void;
}

const DataTable = <TData, TValue>({
	columns,
	data,
	isLoading,
	totalData,
	pagination,
	setPagination,
	filters,
	onRowClick,
} : DataTableProps<TData, TValue>) => {
  
  const [sorting, setSorting] = React.useState<SortingState>([]);
	const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
	const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
		data,
		columns,
		onSortingChange: setSorting,
		onPaginationChange: setPagination,
		manualPagination: true,
		pageCount: Math.ceil(totalData / pagination.pageSize) || 0,
    getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		onColumnVisibilityChange: setColumnVisibility,
		onRowSelectionChange: setRowSelection,
		state: {
			sorting,
			columnVisibility,
			rowSelection,
			pagination,
		},
	});

  const topContent = React.useMemo(() => {
    return(
      <>{filters}</>
    )
  }, [filters]);

  // const bottomContent = React.useMemo(() => {
  //   return(
  //     <>
  //       <Pagination
  //         initialPage={1} total={10} 
  //         // pageIndex={pagination.pageIndex}
  //         // pageSize={pagination.pageSize}
  //         // totalItems={pagination.totalItems}
  //         // onPageChange={pagination.onPageChange}
  //       />
  //     </>
  //   )
  // }, [pagination]);

  return (
		<Table
			color='default'
			selectionMode="single"
			topContent={topContent}
			topContentPlacement="outside"
			// bottomContent={bottomContent}
			// bottomContentPlacement="outside"
			classNames={{
				wrapper: ["min-h-[400px]"],
			}}
		>
			<TableHeader>
				{table.getHeaderGroups().map((headerGroup) => (
					<React.Fragment key={headerGroup.id}>
						{headerGroup.headers.map((header) => (
							<TableColumn key={header.id}>
								{flexRender(header.column.columnDef.header, header.getContext())}
							</TableColumn>
						))}
					</React.Fragment>
				))}
			</TableHeader>

			<TableBody className="bg-white" emptyContent={"No users found"}>
				{isLoading 
					? <TableRow>
							<TableCell
								colSpan={columns.length}
								className="h-80 text-center">
								Cargando...
							</TableCell>
						</TableRow>
					: table.getRowModel().rows?.length 
							? table.getRowModel().rows.map((row) => (
									<TableRow
										key={row.id}
										data-state={row.getIsSelected() && "selected"}
										onClick={() =>  onRowClick && onRowClick(row.original)}
										className='cursor-pointer'
									>
										{row.getVisibleCells().map((cell) => (
											<TableCell key={cell.id}>
												{flexRender(
													cell.column.columnDef.cell,
													cell.getContext()
												)}
											</TableCell>
										))}
									</TableRow>
								))
							: <TableRow>
									<TableCell
										colSpan={columns.length}
										className="h-80 text-center">
										Sin resultados.
									</TableCell>
								</TableRow>
				}
			</TableBody>
		</Table>
  );
};

export default DataTable;