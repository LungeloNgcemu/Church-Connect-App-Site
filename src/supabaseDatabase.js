import { createClient } from "@supabase/supabase-js";


const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljaG52dW1mem9iaWdza3lyb2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNjUyMDYsImV4cCI6MjAzMDk0MTIwNn0.UgA32sjsuwQav3QHB7q7fhcCTzQZ8qcihD9NLIvQpsI';
const supabaseUrl = 'https://ichnvumfzobigskyroej.supabase.co';

const supabaseConnnection = createClient(supabaseUrl, supabaseKey);


export default supabaseConnnection;