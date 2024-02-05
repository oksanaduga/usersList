import classNames from 'classnames'
import cls from './BasicPagination.module.scss'
import { type ChangeEvent, memo, useCallback } from 'react'
import { addQueryParams } from '@/shared/helpers'
import { useAppDispatch } from '@/shared/store/hooks/hook'
import { organizationActions } from '@/entities/Organization'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface BasicPaginationProps {
  className?: string
  pages?: number
}

export const BasicPagination = memo(
  ({ className, pages = 1 }: BasicPaginationProps) => {
    const dispatch = useAppDispatch()

    const onChangeHandler = useCallback(
      (e: ChangeEvent<unknown>, value: number) => {
        const page = value.toString()

        addQueryParams({ page })
        dispatch(organizationActions.setUserCurrentPage(page))
      },
      []
    )

    return (
            <Stack
                className={classNames(cls.Pagination, [className])}
                spacing={6}
            >
                <Pagination
                    className={classNames(cls.paginationButton)}
                    count={pages}
                    shape="rounded"
                    color="primary"
                    onChange={onChangeHandler}
                />
            </Stack>
    )
  }
)
