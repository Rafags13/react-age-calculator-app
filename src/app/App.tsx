import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { useMediaQuery } from 'react-responsive';
import { returnDiffData, verifyIfDayBelongsMonth } from '../util/functions';

import Card from './components/Card';
import Input from './components/Input';
import Layout from './components/Layout';
import Row from './components/Row';
import Line from './components/Line';
import Arrow from './components/Arrow';
import Column from './components/Column';
import BigLabel from './components/BigLabel';

import '../../src/globals.css';

type Inputs = {
  days: string,
  months: string,
  years: string,
}

function App() {
  const { register, handleSubmit, watch, setError, clearErrors, formState: { errors } } = useForm<Inputs>();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 769px)' });
  const [currentData, setCurrentData] = useState<Inputs>({ days: '0', months: '0', years: '0' });

  function onSubmit(data: Inputs) {
    const dateDiff = returnDiffData(new Date(`${data.months}/${data.days}/${data.years}`));
    setCurrentData(dateDiff)
  }

  return (
    <Layout>
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Row style={{ justifyContent: isMobile ? 'space-between' : 'flex-start', gap: isDesktop ? '20px' : '', alignItems: 'flex-start' }}>
            <Input
              label={'DAY'}
              maxLenght={2}
              placeholder={'DD'}
              errorMessage={errors.days?.message as string}
              {...register("days", {
                required: "must be a valid day",
                validate: (value) => {
                  const ACCEPTABLE_INITIAL_NUMBER_OF_DAYS = 31;
                  return Number(value) !== 0 && Number(value) <= ACCEPTABLE_INITIAL_NUMBER_OF_DAYS;
                }
              })}
            />

            <Input
              label={'MONTH'}
              maxLenght={2}
              placeholder={'MM'}
              errorMessage={errors.months?.message as string}
              {...register("months", {
                required: "must be a valid month",
                validate: (months) => {
                  const days = watch('days');
                  const valid = verifyIfDayBelongsMonth(days, months);
                  if (!valid) {
                    setError('days', {
                      message: 'must be a valid day'
                    });
                  } else {
                    clearErrors('days');
                  }
                  return !valid ? 'must be a valid month' : undefined;
                }
              })}
            />

            <Input
              label={'YEAR'}
              maxLenght={4}
              placeholder={'YYYY'}
              errorMessage={errors.years?.message as string}
              {...register("years", {
                required: "must be a valid year",
                validate: (year) => {
                  return Number(year) > 1900 && Number(year) <= new Date().getFullYear();
                }
              })}
            />
          </Row>

          {
            isDesktop && (
              <Row>
                <Line />
                <Arrow />
              </Row>
            )
          }

          {
            isMobile && (
              <Row style={{ marginTop: '32px' }}>
                <Line />
                <Arrow />
                <Line />
              </Row>
            )
          }

          <Column>
            <BigLabel value={currentData.years === '0' ? '__' : currentData.years} descriptionOfValue={'years'} />

            <BigLabel value={currentData.months === '0' ? '__' : currentData.months} descriptionOfValue={'months'} />

            <BigLabel value={currentData.days === '0' ? '__' : currentData.days} descriptionOfValue={'days'} />
          </Column>
        </form>
      </Card>

    </Layout>
  );
}

export default App;
