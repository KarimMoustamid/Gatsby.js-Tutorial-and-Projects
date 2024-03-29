import React from 'react';
import Layout from "../components/Layout";

const ErrorPage = () => {
    return (
        <div>
            <Layout>
                <main className="error-page">
                    <section>
                        <h1>404</h1>
                        <h3>page not found</h3>
                    </section>
                </main>
            </Layout>
        </div>
    );
};

export default ErrorPage;