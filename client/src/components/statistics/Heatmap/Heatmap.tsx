import Calendar from 'react-github-contribution-calendar'
import { CalendarWrapper } from './Styles'

export function Heatmap() {
  const panelColors = ['#EEEEEE', '#F78A23', '#F87D09', '#AC5808', '#7B3F06']
  const until = '2016-06-30'
  const values = {
    '2016-06-23': 1,
    '2016-06-26': 2,
    '2016-06-27': 3,
    '2016-06-28': 4,
    '2016-06-29': 4
  }
  return (
    <CalendarWrapper>
      <Calendar
        values={values}
        panelColors={panelColors}
        until={until}
        weekLabelAttributes={undefined}
        monthLabelAttributes={undefined}
        panelAttributes={undefined}></Calendar>
    </CalendarWrapper>
  )
}

