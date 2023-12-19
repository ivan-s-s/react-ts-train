import { useState, useEffect, useCallback } from "react";
import type { MultiValue, SingleValue, OnChangeValue } from "react-select";
import { getPostsApi, type TPosts } from "services/api/posts";
import type { TSelectOption, TSelectMultiType, TAsyncSelectLoadOptions, TAsyncSelectLoadOptionsCallback } from "ui-kit";
import { DEBOUNCE_TIMEOUT } from "ui-kit";
import isNil from "lodash/isNil";
import debounce from "lodash/debounce";

export const usePosts = () => {
  const [isLoading, setIsloading] = useState(false);
  const [isSelectOpened, setIsSelectOpened] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [posts, setPosts] = useState<TPosts>([]);

  const [selectedOption, setSelectedOption] = useState<SingleValue<TSelectOption | MultiValue<TSelectOption>>>({
    value: "",
    label: "",
  });
  const [multipleSelectedOption, setMultipleSelectedOption] = useState<SingleValue<TSelectOption | MultiValue<TSelectOption>>>({
    value: "",
    label: "",
  });

  const handleChange = (selectedOption?: OnChangeValue<TSelectOption, TSelectMultiType>) => {
    if (isNil(selectedOption)) return;
    if (Array.isArray(selectedOption)) {
      setMultipleSelectedOption(selectedOption);
    } else {
      const selectedOptionSingle = selectedOption as TSelectOption;
      setSelectedOption(selectedOptionSingle);
    }
    setIsSubmitting(prevState => !prevState);
  };

  const handleBlur = () => {
    setIsSelectOpened(false);
  };

  const handleFocus = () => {
    setIsSelectOpened(true);
  };

  useEffect(() => {
    if (!isSubmitting) return;
    setIsSubmitting(prevState => !prevState);
  }, [isSubmitting, setIsSubmitting]);

  const fetchPosts = async({
    inputValue, callback
  }: {
    inputValue: string;
    callback: TAsyncSelectLoadOptionsCallback
  }) => {
    setIsloading(true);
    try {
      const params = { userId: inputValue };
      const response = await getPostsApi(params);
      setPosts(posts);
      callback(response.map((item) => ({label: item.title, value: String(item.id)})));
    } catch (error) {
      console.error(error);
    } finally {
      setIsloading(false);
    }
  }

  const debouncedFetcher = useCallback(
    debounce(({ inputValue, callback }) => {
      void fetchPosts({inputValue, callback});
    }, /* DEBOUNCE_TIMEOUT */2000),
    [],
  );

  const handleLoadOptions: TAsyncSelectLoadOptions = (inputValue, callback) => {
    debouncedFetcher({ inputValue, callback });
  }

  return {
    isLoading,
    isSelectOpened,
    isSubmitting,
    multipleSelectedOption,
    onBlur: handleBlur,
    onChange: handleChange,
    onFocus: handleFocus,
    onLoadOptions: handleLoadOptions,
    posts,
    selectedOption,
  };
};