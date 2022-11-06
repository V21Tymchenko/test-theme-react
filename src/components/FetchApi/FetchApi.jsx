import {
  SectionFetchApi,
  ContainerFetchApi,
  FormFetchApi,
  LabelFetchApi,
  InputFetchApi,
} from './FetchApi.styled';
export const FetchApi = () => {
  return (
    <SectionFetchApi>
      <ContainerFetchApi>
        <FormFetchApi>
          <LabelFetchApi>
            Зделай запрос
            <InputFetchApi />
          </LabelFetchApi>
        </FormFetchApi>
      </ContainerFetchApi>
    </SectionFetchApi>
  );
};
