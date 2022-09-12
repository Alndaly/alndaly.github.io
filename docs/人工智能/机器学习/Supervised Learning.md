## Regression

> **optimization algorithms**
> - Gradient Descent
> - Conjugate Gradient
> - BFGS
> - L-BFGS

### Linear Regression

**Normal Equation**

$\Theta = (X^TX)^{-1}X^Ty$

**Gradient Descent**

*Cost Function*: 

$J(\theta) = \frac1m\sum\limits_{i=1}^m\frac12(h_\theta(x^{(i)}-y^{(i)})^2$

$h_\theta(x)=\theta^Tx$  ==> this causes the difference between linear regression and logistic regression

to get the ==$\min\limits_\theta J(\theta)$==, we need to repeat:

$\theta_j := \theta_j -\alpha\frac\partial{\partial\theta_j}J(\theta)$

for gradient descent, the equation above should change into something like this:

$\theta_j := \theta_j - \alpha\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)}-y^{(i)})x_j^{i}$

If the n is very large, then we should choose to use **Normal Equation**, or we'd better choose to use Gradient Descent.

Attention, the **Normal Equation** only make sense when solve **Linear Regression**.

If $X^TX$ is **noninvertible,** the common causes might be having :
-   Redundant features, where two features are very closely related (i.e. they are linearly dependent)
-   Too many features (e.g. m ≤ n). In this case, delete some features or use "regularization" (to be explained in a later lesson).

Solutions to the above problems include deleting a feature that is linearly dependent with another or deleting one or more features when there are too many features.

### Logistic Regression

Logistic Regression is acutally a classification algorithm but regression.

Want $0\leq h_{\theta}(x)\leq1$

$h_\theta(x)=g(\Theta_Tx)$

$g(z) = \frac1{1+e^{-z}}$

![Sigmoid Function](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109011327103.png)

The function g(z), shown above, maps any real number to the (0, 1) interval, making it useful for transforming an arbitrary-valued function into a function better suited for classification.


==>$h_\theta(x)=\frac1{1+e^{-\Theta^Tx}}$

$h_\theta(x)=P(y=1|x;\Theta)=1-P(y=0|x;\Theta)$

$P(y=0|x;\Theta)+P(y=1|x;\Theta)=1$

$h_\theta(x)$ will give us the **probability** that our output is 1. For example, $h_\theta(x)$=0.7$h_\theta(x)=0.7$ gives us a probability of 70% that our output is 1. Our probability that our prediction is 0 is just the complement of our probability that it is 1 (e.g. if probability that it is 1 is 70%, then the probability that it is 0 is 30%).

*Cost Function:*

$$\begin{aligned}
J(\theta) 
& = \frac1m\sum\limits_{i=1}^mCost(h_\theta(x^{(i)}-y^{(i)}) \\
& = - \frac1m[\sum\limits_{i=1}^my^{(j)}\log h_\theta(x^{(i)})+(1-y^{(i)})\log (1-h_\theta(x^{(i)}))]
\end{aligned}$$

$h_\theta(x)=\frac1{1+e^{-\theta^{T}x}}$  ==>this causes the difference between linear regression and logistic regression

**Gradient Descent**

to get the $\min\limits_\theta J(\theta)$, we need to repeat:

$\theta_j := \theta_j -\alpha\frac\partial{\partial\theta_j}J(\theta)$

for gradient descent, the equation above should change into something like this:

$\theta_j := \theta_j - \alpha\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)}-y^{(i)})x_j^{i}$

deep reason: the reason getting this function above is because of the principle of maximum likelihood estimation

$$Cost(h_\theta(x),y) =
\begin{cases} 
-log(h_\theta(x))  & \mbox{if y = 1} \\
-log(1-h_\theta(x)) & \mbox{if y = 0}
\end{cases}$$
to make these two equations into one:
$$\Longrightarrow Cost(h_\theta(x),y)=-ylog(h_\theta(x))-(1-y)log(1-h_\theta(x))$$

Note: $y=\textrm{0 or 1}$ always

---
## Addressing overfitting
1) Reduce the number of features:
-   Manually select which features to keep.
-   Use a model selection algorithm (studied later in the course).
2) Regularization
-   Keep all the features, but reduce the magnitude of parameters $\theta_j$.
-   Regularization works well when we have a lot of slightly useful features.

In regularized linear regression, we choose $\theta$ to minimise

$$J(\theta)=\frac1{2m}[\sum\limits_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})^2+\lambda\sum\limits_{j=1}^m\theta_j^2]$$

The λ, or lambda, is the **regularization parameter**. It determines how much the costs of our theta parameters are inflated.

Attention: We don't penalize $\theta_0$.

Using the above cost function with the extra summation, we can smooth the output of our hypothesis function to reduce overfitting. If lambda is chosen to be too large, it may smooth out the function too much and cause underfitting. But if the lambda is too small, it will cause underfitting.

For **Gradient Descent**, we just need to repeat:

$$\begin{rcases}
\theta_0 := \theta_0 - \alpha\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)}-y^{(i)})x_0^{i}	&j=0  \\ 
\theta_j := \theta_0 - \alpha[(\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)}-y^{(i)})x_j^{i})+\frac{\lambda}m\theta_j]  &j=(1,2,3,4,5,...,n)
\end{rcases} 
$$

$$\Longrightarrow\theta_j := \theta_j(1-\alpha\frac\lambda m) - \alpha\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)}-y^{(i)})x_j^{i}$$

### Normal Equation

$\theta = (X^TX+\lambda)^{-1}X^yy$

Suppose $m\leq n$, then $(X^TX)$ should be non-invertible.

m #examples   

n #features

**Regularization** can also fix this problem.

$\theta = (X^TX+\lambda\begin{bmatrix}0&0&0&0&0\\0&1&0&0&0\\0&0&1&0&0\\0&0&0&\ddots&0\\0&0&0&0&1\\\end{bmatrix})^{-1}X^yy$

the number of row/col is equal to n.
 
if $\lambda>0$, $(X^TX+\lambda\begin{bmatrix}0&0&0&0&0\\0&1&0&0&0\\0&0&1&0&0\\0&0&0&\ddots&0\\0&0&0&0&1\\\end{bmatrix})$, it will be invertible.

**Logistic **

$$\begin{rcases}
\theta_0 := \theta_0 - \alpha\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)}-y^{(i)})x_0^{i}	&j=0  \\ 
\theta_j := \theta_j - \alpha[\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)})-y^{(i)})x_j^{i}+\frac{\lambda}m\theta_j]  &j=(1,2,3,4,5,...,n)
\end{rcases} 
$$

$$\Longrightarrow\theta_j := \theta_j(1-\alpha\frac\lambda m) - \alpha\frac1m\sum\limits_{i=1}^m(h_\theta(x^{(i)}-y^{(i)})x_j^{i}$$

$$J(\theta)=-\frac1m\sum\limits_{i=1}^m[y^{(i)}\log(h_\theta(x^{(i)}))+(1-y^{(i)})\log(1-h_\theta(x^{(i)}))]+\frac\lambda {2m}\sum\limits_{j=1}^n\theta_j^2$$

## Neural Network

### Summarize

First, pick a network architecture; choose the layout of your neural network, including how many hidden units in each layer and how many layers in total you want to have.

-   Number of input units = dimension of features $x^{(i)}$
-   Number of output units = number of classes
-   Number of hidden units per layer = usually more the better (must balance with cost of computation as it increases with more hidden units)
-   Defaults: 1 hidden layer. If you have more than 1 hidden layer, then it is recommended that you have the same number of units in every hidden layer.

**Training a Neural Network**

1.  Randomly initialize the weights
2.  Implement forward propagation to get $h_\Theta(x^{(i)})$ for any $x^{(i)}$
3.  Implement the cost function
4.  Implement backpropagation to compute partial derivatives
5.  Use gradient checking to confirm that your backpropagation works. Then disable gradient checking.
6.  Use gradient descent or a built-in optimization function to minimize the cost function with the weights in theta.

When we perform forward and back propagation, we loop on every training example:

```octave
for i = 1:m,
   Perform forward propagation and backpropagation using example (x(i),y(i))
   (Get activations a(l) and delta terms d(l) for l = 2,...,L
```

The following image gives us an intuition of what is happening as we are implementing our neural network:

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109041100177.png)

Ideally, you want $h_\Theta(x^{(i)})\approx y^{(i)}$. This will minimize our cost function. However, keep in mind that $J(\Theta)$ ==is not convex== and thus we can end up in a ==local minimum== instead.

**---End Summarize Here---**

---

Dimension of $\Theta^{(j)}$: $s_{j+1}×(s_j+1)$

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109022007683.png)

Example: If layer 1 has 2 input nodes and layer 2 has 4 activation nodes. Dimension of $\Theta^{(1)}$ is going to be 4×3 where $s_j=2$ and $s_j+1=4$, so $s_{j+1}×(s_j+1)=4×3$.

**Cost Function**
$$J(\Theta)=-\frac1m\sum\limits_{i=1}^m\sum\limits_{k=1}^K[y_k^{(i)}\log((h_\Theta(x^{(i)}))_k)+(1-y_k^{(i)})\log(1-(h_\Theta(x^{(i)}))_k)]+\frac\lambda {2m}\sum\limits_{l=1}^{L-1}\sum\limits_{i=1}^{s_l}\sum\limits_{j=1}^{s_l+1}(\Theta_{j,i}^{(l)})^2$$

- L = total number of layers in the network
- $s_l$ = number of units (not counting bias unit) in layer l
- K = number of output units/classes

Note: Compared with the **cost function** of the **logistic regress.**
- the double sum simply adds up the logistic regression costs calculated for each cell in the output layer
- the triple sum simply adds up the squares of all the individual Θs in the entire network.
- the i in the triple sum does **not** refer to training example i

If we consider simple non-multiclass classification (k = 1) and disregard regularization, the cost is computed with:

$$cost(t)=y^{(t)} \log⁡(h_\Theta(x^{(t)}))+(1−y^{(t)}) \log⁡(1−h_\Theta(x^{(t)}))$$

### Back propagation Algorithm

Given training set $\{(x^{(i)},y^{(i)})\d otsb(x^{(m)},y^{(m)})\}$

- Set $\Delta_{i,j}^{(l)}:=0$ for all $(l,i,j)$, (hence you end up having a matrix full of zeros)

For training example $t =1$ to $m$:

1.  Set $a^{(1)}:=x^{(t)}$
2.  Perform forward propagation to compute $a^{(l)}$ for $l=2,3,…,L$

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109032011683.png)

3. Using $y^{(t)}$, compute $δ^{(L)}=a^{(L)}−y^{(t)}$

Where $L$ is our total number of layers and $a(L)$ is the vector of outputs of the activation units for the last layer. So our "error values" for the last layer are simply the differences of our actual results in the last layer and the correct outputs in y. To get the delta values of the layers before the last layer, we can use an equation that steps us back from right to left:

4. Compute $\delta^{(L−1)},\delta^{(L−2)},…,\delta^{(2)}$ using $\delta^{(l)}=((\Theta^{(l)})^T\delta^{(l+1)}).*g'(z^{(l)})$

The delta values of layer $l$ are calculated by multiplying the delta values in the next layer with the theta matrix of layer l. We then element-wise multiply that with a function called $g'$, or g-prime, which is the derivative of the activation function g evaluated with the input values given by $z^{(l)}$.

The g-prime derivative terms can also be written out as:

$g'(z^{(l)})=a^{(l)} .∗ (1−a^{(l)})$
	
5. $\delta_{i,j}^{(l)}:=\delta_{i,j}^{(l)}+a_j^{(l)}\delta_i^{(l+1)}$ or with vectorization, $\Delta^{(l)}:=\Delta^{(l)}+\delta^{(l+1)}(a^{(l)})^T$

Hence we update our new $\Delta$ matrix.

- $D_{i,j}^{(l)}:=\frac1m(\Delta_{i,j}^{(l)}+\lambda\Theta_{i,j}^{(l)}), \mbox{ if j}\neq0.$
- $D_{i,j}^{(l)}:=\frac1m\Delta_{i,j}^{(l)},\mbox{ if j=0}$

The capital-delta matrix D is used as an "accumulator" to add up our values as we go along and eventually compute our partial derivative. Thus we get $\frac\partial{\partial\Theta_{ij}^{(l)}}J(\Theta)=D_{ij}^{(l)}$

Recall that the cost function for a neural network is:

$$J(\Theta)=-\frac1m\sum\limits_{t=1}^m\sum\limits_{k=1}^K[y_k^{(t)}\log((h_\Theta(x^{(t)}))_k)+(1-y_k^{(t)})\log(1-(h_\Theta(x^{(t)}))_k)]+\frac\lambda {2m}\sum\limits_{l=1}^{L-1}\sum\limits_{i=1}^{s_l}\sum\limits_{j=1}^{s_l+1}(\Theta_{j,i}^{(l)})^2$$

If we consider simple non-multiclass classification (k = 1) and disregard regularization, the cost is computed with:

$cost(t)=y^{(t)} \log⁡(h_\Theta(x^{(t)}))+(1−y^{(t)}) log⁡(1−h_\Theta(x^{(t)}))$

Intuitively, $\delta_j^{(l)}$ is the "error" for $a_j^{(l)}$ (unit j in layer l). More formally, the delta values are actually the derivative of the cost function:

$\delta_j^{(l)}=\frac\partial{\partial z_j^{(l)}}cost(t)$

Recall that our derivative is the slope of a line tangent to the cost function, so the steeper the slope the more incorrect we are. Let us consider the following neural network below and see how we could calculate some δj(l)δj(l):

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109032040848.png)

In the image above, to calculate $\delta_2^{(2)}$, we multiply the weights $\Theta_{12}^{(2)}$ and $Θ_{22}^{(2)}$ by their respective $\delta$ values found to the right of each edge. So we get $\delta_2^{(2)}= \Theta_{12}^{(2)}*\delta_1^{(3)}+\Theta_{22}^{(2)}*\delta_2^{(3)}$. To calculate every single possible $\delta_j^{(l)}$, we could start from the right of our diagram. We can think of our edges as our ΘijΘij​. Going from right to left, to calculate the value of $\delta_j^{(l)}$, you can just take the over all sum of each weight times the δδ it is coming from. Hence, another example would be $\delta_2^{(3)}=\Theta_{12}^{(3)}*\delta_1^{(4)}$.

### ==Random Initialization==

Notes: Initializing all theta weights to zero does not work with neural networks. When we backpropagate, all nodes will update to the same value repeatedly. Instead we can randomly initialize our weights for our $\Theta$ matrices using the following method:

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109041017002.png)

### Gradient Checking

Gradient checking will assure that our backpropagation works as intended. We can approximate the derivative of our cost function with:

$\frac\partial{\partial\Theta}J(\Theta)\approx\frac{J(\Theta+\epsilon)-J(\Theta-\epsilon)}{2\epsilon}$

With multiple theta matrices, we can approximate the derivative **with respect to** $\theta_j$ as follows:

$\frac\partial{\partial\Theta}J(\Theta)\approx\frac{J(\Theta_1,...,\Theta_j+\epsilon,...,\Theta_n)-J(\Theta_1,...,\Theta_j-\epsilon,...,\Theta_n)}{2\epsilon}$

A small value for $\epsilon$ (epsilon) such as $\epsilon=10^-4$, guarantees that the math works out properly. If the value for $\epsilon$ is too small, we can end up with numerical problems.

Hence, we are only adding or subtracting epsilon to the $\Theta_j$ matrix. In octave we can do it as follows:

```octave
epsilon = 1e-4;
for i = 1:n,
  thetaPlus = theta;
  thetaPlus(i) += epsilon;
  thetaMinus = theta;
  thetaMinus(i) -= epsilon;
  gradApprox(i) = (J(thetaPlus) - J(thetaMinus))/(2*epsilon)
end;
```

We previously saw how to calculate the deltaVector. So once we compute our gradApprox vector, we can check that gradApprox $\approx$ deltaVector.

Once you have verified **once** that your backpropagation algorithm is correct, you don't need to compute gradApprox again. The code to compute gradApprox can be very slow.

## Machine Learning Diagnostic

Once we have done some trouble shooting for errors in our predictions by:
- Getting more training examples
- Trying smaller sets of features
- Trying additional features
- Trying polynomial features
- Increasing or decreasing λ

We can move on to evaluate our new hypothesis.

A hypothesis may have a low error for the training examples but still be inaccurate (because of overfitting). Thus, to evaluate a hypothesis, given a dataset of training examples, we can split up the data into two sets: a **training set** and a **test set**. Typically, the training set consists of 70 % of your data and the test set is the remaining 30 %.

The new procedure using these two sets is then:

1. Learn $\Theta$ and minimize $J_{train}(\Theta)$ using the training set
2. Compute the test set error $J_{test}(\Theta)$

## Model Selection and Train/Validation/Test Sets

Just because a learning algorithm fits a training set well, that does not mean it is a good hypothesis. It could over fit and as a result your predictions on the test set would be poor. The error of your hypothesis as measured on the data set with which you trained the parameters will be lower than the error on any other data set.

Given many models with different polynomial degrees, we can use a systematic approach to identify the 'best' function. In order to choose the model of your hypothesis, you can test each degree of polynomial and look at the error result.

One way to break down our dataset into the three sets is:

- Training set: 60%
- Cross validation set: 20%
- Test set: 20%

We can now calculate three separate error values for the three different sets using the following method:

1. Optimize the parameters in $\Theta$ using the training set for each polynomial degree.
2. Find the polynomial degree d with the least error using the cross validation set.
3. Estimate the generalization error using the test set with $J_{test}(\Theta^{(d)})$, (d = theta from polynomial with lower error);

This way, the degree of the polynomial d has not been trained using the test set.

Why is the recommended approach to perform error analysis using the cross validation data used to compute $J_{CV}(\theta)$ rather than the test data used to compute $J_{test}(\theta)$?

If we develop new features by examining the test set, then we may end up choosing features that work well specifically for the test set, so $J_{test}(θ)$ is no longer a good estimate of how well we generalize to new examples.

## Diagnosing Bias vs. Variance

In this section we examine the relationship between the degree of the polynomial d and the underfitting or overfitting of our hypothesis.

- We need to distinguish whether **bias** or **variance** is the problem contributing to bad predictions.
- High bias is underfitting and high variance is overfitting. Ideally, we need to find a golden mean between these two.

The training error will tend to **decrease** as we increase the degree d of the polynomial.

At the same time, the cross validation error will tend to **decrease** as we increase d up to a point, and then it will **increase** as d is increased, forming a convex curve.

**High bias (underfitting)**: both $J_{train}(\Theta)$ and $J_{CV}(\Theta)$ will be high. Also, $J_{CV}(\Theta)\approx J_{train}(\Theta)$.

**High variance (overfitting)**: $J_{train}(\Theta)$ will be low and $J_{CV}(\Theta)$ will be much greater than $J_{train}(\Theta)$.

The is summarized in the figure below:

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109041322390.png)

## Regularization and Bias/Variance

In the figure above, we see that as $\lambda$ increases, our fit becomes more rigid. On the other hand, as $\lambda$ approaches 0, we tend to over overfit the data. So how do we choose our parameter $\lambda$ to get it 'just right' ? In order to choose the model and the regularization term $\lambda$, we need to:

1.  Create a list of lambdas (i.e. $\lambda$∈{0,0.01,0.02,0.04,0.08,0.16,0.32,0.64,1.28,2.56,5.12,10.24});
2.  Create a set of models with different degrees or any other variants.
3.  Iterate through the $\lambda$s and for each $\lambda$ go through all the models to learn some $\Theta$.
4.  Compute the cross validation error using the learned $\Theta$ (computed with λ) on the $J_{CV}(\Theta)$ **without** regularization or $\lambda = 0$ .
5.  Select the best combo that produces the lowest error on the cross validation set.
6.  Using the best combo $\Theta$ and $\lambda$, apply it on $J_{test}(\Theta)$to see if it has a good generalization of the problem.

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109041351376.png)

## Learning Curves

Training an algorithm on a very few number of data points (such as 1, 2 or 3) will easily have 0 errors because we can always find a quadratic curve that touches exactly those number of points. Hence:

- As the training set gets larger, the error for a quadratic function increases.
- The error value will plateau out after a certain m, or training set size.

**Experiencing high bias:**

**Low training set size**: causes $J_{train}(\Theta)$ to be low and $J_{CV}(\Theta)$ to be high.

**Large training set size**: causes both $J_{train}(\Theta)$ and $J_{CV}(\Theta)$ to be high with $J_{train}(\Theta)\approx J_{CV}(\Theta)$.

If a learning algorithm is suffering from **high bias**, getting more training data will not **(by itself)** help much.

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109041422527.png)

**Experiencing high variance:**

**Low training set size**: $J_{train}(\Theta)$ will be low and $J_{CV}(\Theta)$ will be high.

**Large training set size**: $J_{train}(\Theta)$ increases with training set size and $J_{CV}(\Theta)$ continues to decrease without leveling off. Also,  $J_{train}(\Theta)<J_{CV}(\Theta)$ but the difference between them remains significant.

If a learning algorithm is suffering from **high variance**, getting more training data is likely to help.

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109041422318.png)

## Deciding What to Do Next Revisited

Our decision process can be broken down as follows:

- **Getting more training examples:** Fixes high variance
- **Trying smaller sets of features:** Fixes high variance
- **Adding features:** Fixes high bias
- **Adding polynomial features:** Fixes high bias
- **Decreasing λ:** Fixes high bias
- **Increasing λ:** Fixes high variance.

### Diagnosing Neural Networks

- A neural network with fewer parameters is **prone to underfitting**. It is also **computationally cheaper**.
- A large neural network with more parameters is **prone to overfitting**. It is also **computationally expensive**. In this case you can use regularization (increase λ) to address the overfitting.

Using a single hidden layer is a good starting default. You can train your neural network on a number of hidden layers using your cross validation set. You can then select the one that performs best.

**Model Complexity Effects:**

- Lower-order polynomials (low model complexity) have high bias and low variance. In this case, the model fits poorly consistently.
- Higher-order polynomials (high model complexity) fit the training data extremely well and the test data extremely poorly. These have low bias on the training data, but very high variance.
- In reality, we would want to choose a model somewhere in between, that can generalize well but also fits the data reasonably well.

## Machine Learning System Design

The recommended approach to solving machine learning problems is to:

- Start with a simple algorithm, implement it quickly, and test it early on your cross validation data.
- Plot learning curves to decide if more data, more features, etc. are likely to help.
- Manually examine the errors on examples in the cross validation set and try to spot a trend where most of the errors were made.

## Precision , Recall and $F_1Score$

Precision and recall are defined according to:

If predicted class and actual class are both 1, then a test example is a True Positive. If predicted class and actual class are both 0, then a test example is a True Negative. If predicted class is 0 actual class is 1, then a test example is a False Negative. If predicted class is 1 and actual class is 0, then a test example is a False Positive.

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109041617362.png)

$\text{Precision}=\frac{\text{True positives}}{\text{\# predicted as postive}}=\frac{\text{True positives}}{\text{True positives+False positives}}$

$\text{Recall}=\frac{\text{True positives}}{\text{\# actual postive}}=\frac{\text{True positives}}{\text{True positives+False negatives}}$

For different values of the threshold parameter, you get different values of precision (P) and recall (R). Which of of the following would be **a reasonable way** to pick the value to use for the threshold?

$F_1Score=2\frac{PR}{P+R}$

## Data for Machine Learning

Large data rationale

Assume feature has sufficient information to predict accurately.

> Useful test: Given the input , can a human expert confidently predict ?

Example: For breakfast I ate _____ eggs. 
Counterexample: Predict housing price from only size ($feet^2$) and no other features.
- Use a learning algorithm with many parameters (e.g. logistic regression/linear regression with many features; neural network with many hidden units).

*(give sufficient information)*

- Use a very large training set (unlikely to overfit)

## Support Vector Machines

$$\min\limits_\theta C\sum\limits_{i=1}^m[y^{(i)}cost_1(\theta^Tx^{(i)})+(1-y^{(i)})cost_0(\theta^Tx^{(i)})]+\frac12\sum\limits_{i=1}^n\theta_j^2$$

**Hypothesis:**

$$h_\theta(x) = \begin{cases}
1, &if \mbox{ }\Theta^Tx\geq 0 \\
0, &otherwise
\end{cases}$$

The SVM optimization problem we used is:

$\min\limits_\theta\frac12\sum\limits_{j=1}^n\theta_j^2=\frac12(\theta_1^2+\theta_2^2)=\frac12(\sqrt{\theta_1^2+\theta_1^2})^2=\frac12||\Theta||$
$\begin{split}s.t. ||\theta||\cdot p^{(i)} \geq1,\text{ if }y^{(i)}=1\\||\theta||\cdot p^{(i)} \leq1,\text{ if }y^{(i)}=0\end{split}$

Noted: $\Theta \mbox{ } \bot \mbox{ Decision Boundary}$

![](https://cdn.jsdelivr.net/gh/Alndaly/imgsrc/img/202109050020042.png)

### Kernels

Given $x$:

**Gaussian Kernel**

$\begin{equation}\begin{split}f_i&=similarity(x,l^{(i)})\\&=exp(-\frac{||x-l^{(i)}||^2}{2\sigma^2})  \end{split}\end{equation}$

Hypothesis: Given $x$, compute features $f \in R^{m+1}$

**No Kernel( "linear kernel" )**

Predict "y=1" if $\theta^Tf\geq0$

Training:
$$\min\limits_\theta C\sum\limits_{i=1}^my^{(i)}cost_1(\theta^Tf^{(i)})+(1-y^{(i)})cost_0(\theta^Tf^{(i)})+\frac12\sum\limits_{j=1}^n\theta_j^2$$

### SVM Parameters

$C(=\frac1\lambda).$

Large C ==> Cause lower bias, higher varies

Small C ==> Cause higher bias, lower varies

$\sigma^2.$

Large $\sigma^2$ ==> Features vary more smoothly. Higher bias, lower variance.

Small $\sigma^2$ ==>  Features vary less smoothly. Lower bias, higher variance.

## Logistic regression vs. SVMs

$n$ = number of features $(x \in R^{n+1})$, $m$ = number of training examples. 

- If $n$ is large (relative to $m$):  
Use logistic regression, or SVM without a kernel (“linear kernel”)
	
- If $n$ is small, $m$ is intermediate: 
Use SVM with Gaussian kernel

- If $n$ is small, $m$ is large:  
Create/add more features, then use logistic regression or SVM without a kernel

Neural network likely to work well for most of these settings, but may be slower to train.

It turns out that the optimization problem that the SVM has is a convex optimization problem and so the good SVM optimization software packages will always find the global minimum or something close to it. And so for the SVM you don't need to worry about local optima.

