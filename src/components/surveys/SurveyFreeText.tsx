import { CheckboxVisibility, DetailsList, Stack } from "@fluentui/react";
import { FunctionComponent } from "react";

interface Props {
    title: string
    items: string[]
}

export const SurveyFreeText: FunctionComponent<Props> = ({ title, items }) => {
  const _onRenderColumn = (item?: any) => {
    return <div data-is-focusable={true}>{item}</div>;
  };

  return (
    <Stack data-testid="FreeTextTable">
      <DetailsList
        checkboxVisibility={CheckboxVisibility.hidden}
        items={items}
        columns={[{ key: title, name: `${title} (${items.length})`, minWidth: 200 }]}
        ariaLabelForSelectAllCheckbox="Toggle selection for all items"
        ariaLabelForSelectionColumn="Toggle selection"
        checkButtonAriaLabel="select row"
        checkButtonGroupAriaLabel="select section"
        groupProps={{
          isAllGroupsCollapsed: true,
          showEmptyGroups: true,
        }}
        onRenderItemColumn={_onRenderColumn}
        compact={true}
      />
    </Stack>
  );
};
